console.log('Demo socket.io client');

const socket = io();

socket.on('ping', () => {
  console.log('Ricevuto ping');
  socket.emit('pong');
});

const noteForm = document.querySelector("#noteForm");

const title = document.querySelector("#title");
const description = document.querySelector("#description");

noteForm.addEventListener("submit", event => {
  event.preventDefault();
  console.log('Submit form');
  const note = {
    title: title.value,
    description: description.value
  };
  console.log(note);
});

// TODO Save a new Note
