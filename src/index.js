import http from "http";
import app from "./app";
import { PORT } from './config'
import { Server as WebSocketServer } from "socket.io";
import sockets from "./sockets";

const main = () => {

  const server = http.createServer(app);
  const httpServer = server.listen(PORT);
  console.log(`Server running on port ${PORT}`)

  const io = new WebSocketServer(httpServer);
  sockets(io);

};

main();
