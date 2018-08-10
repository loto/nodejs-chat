const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const redis = require('redis');
const client = redis.createClient();
const { promisify } = require('util');
const lrangeAsync = promisify(client.lrange).bind(client);

client.on('connect', function () {
  console.log('Redis client connected');
});

client.on('error', function (err) {
  console.log('Something went wrong ' + err);
});

io.on('connection', function (socket) {
  console.log('a user connected');
  lrangeAsync('chat history', 0, -1)
    .then(msgs => {
      socket.emit('chat history', msgs);
    })
    .catch(err => {
      console.log(err);
    });

  socket.on('disconnect', function () {
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

http.listen(3001, function () {
  console.log('listening on *:3001');
});
