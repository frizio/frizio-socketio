import http from "http";
import app from "./app";
import { PORT } from './config'
import { Server as WebSocketServer } from "socket.io";

const main = () => {

  const server = http.createServer(app);
  const httpServer = server.listen(PORT);
  console.log(`Server running on port ${PORT}`)

  const io = new WebSocketServer(httpServer);
  io.on('connection', () => {
    console.log('New socket connection');
  })
  // To verify: http://localhost:3001/socket.io/socket.io.min.js

};

main();
