// Make connection
const socket = io.connect('http://localhost:4000');

const output = document.getElementById('output');
const btn = document.getElementById('send');
const handle = document.getElementById('handle');
const message = document.getElementById('message');
const feedback = document.getElementById('feedback');

// Emit Events
btn.addEventListener('click', function () {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener('keypress', function () {
  socket.emit('typing', handle.value);
});

// Listen for Events
socket.on('chat', function (data) {
  feedback.innerHTML = '';
  output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function (data) {
  feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});
