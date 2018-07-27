const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const redis = require('redis');
const client = redis.createClient();

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  client.lrange('chat history', 0, -1, function (err, msgs) {
    socket.emit('chat history', msgs);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', saveAndSend);
});

function saveAndSend(msg) {
  client.rpush('chat history', msg, function (err, _) {
    client.ltrim('chat history', -10, -1, function (err, _) {
      io.emit('chat message', msg);
    });
  });
}

http.listen(3000, function(){
  console.log('listening on *:3000');
});
