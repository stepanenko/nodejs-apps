
const express = require('express');
const socket = require('socket.io');

const app = express();

const server = app.listen(4000, function () {
  console.log('listening to requests on port 4000');
});

// Static files
app.use(express.static('public'));

// Socket setup
const io = socket(server);

io.on('connect', function (socket) {
  console.log('made socket connection with id:', socket.id);

  socket.on('chat', function (data) {
    io.sockets.emit('chat', data);
  });

  socket.on('typing', function (data) {
    socket.broadcast.emit('typing', data);
  });
});
