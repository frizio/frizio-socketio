import http from "http";
import app from "./app";
import { PORT } from './config'
import { Server as WebSocketServer } from "socket.io";

const main = () => {

  const server = http.createServer(app);
  const httpServer = server.listen(PORT);
  console.log(`Server running on port ${PORT}`)

  const io = new WebSocketServer(httpServer);
  io.on('connection', (socket) => {
    console.log(`New socket connection. id: `, socket.id);
    socket.emit('ping');

    socket.on('pong', () => {
      console.log('Ricevuto pong');
    });

    socket.on('client:newnote', (data) => {
      console.log('Ricevuti dati');
      console.log(data);
    });

  })
  // To verify: http://localhost:3001/socket.io/socket.io.min.js

};

main();
