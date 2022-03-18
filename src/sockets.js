import Note from "./models/Note";

export default (io) => {

  io.on("connection", (socket) => {

    console.log(`New socket connection. id: `, socket.id);
    
    // Send all Notes to the client
    const emitNotes = async () => {
      const notes = await Note.find();
      //console.log(notes);
      socket.emit("server:loadnotes", notes);
    };
    emitNotes();
    
  });

};


/*
io.on("connection", (socket) => {

  console.log(`New socket connection. id: `, socket.id);
  // console.log(socket.handshake)

  socket.emit("ping");

  socket.on("pong", () => {
    console.log("Ricevuto pong");
  });

  socket.on("client:newnote", (data) => {
    console.log("Ricevuti dati");
    console.log(data);
  });
    
});
  // To verify: http://localhost:3001/socket.io/socket.io.min.js
  
*/
