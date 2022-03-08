console.log('Demo socket.io client');

const socket = io();
socket.on('ping', () => {
  console.log('Ricevuto ping');
  socket.emit('pong');
});

