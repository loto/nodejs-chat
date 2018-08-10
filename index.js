const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const history = require('./history_memory');
// const history = require('./history_redis');

io.on('connection', function (socket) {
  console.log('a user connected');
  history.all().then(msgs => {
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
  history.add(msg)
  .then(
    io.emit('chat message', msg)
  );
}

http.listen(3001, function () {
  console.log('listening on *:3001');
});
