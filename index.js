const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const PORT = 9000;
const { Server } = require("socket.io");
const server = http.createServer(app); // this is http server , handles express js
const io = new Server(server);
app.use(express.static(path.resolve("./public/")));

app.get("/", (req, res) => {
  return res.sendFile("./index.html");
});

io.on("connection", (socket) => {
  socket.on("a message", (message) => {
    console.log("a new user message , ", message); // prints in vs code console (which is basically a server for my development time   )
    socket.broadcast.emit("message", message); // this will send the message to all the clients connected to the server
    // io.emit("message", message); // this will send the message to all the clients connected to the server      
  });
  console.log("socket is client , ", socket.id);
});

server.listen(PORT, () => {
  console.log("server started at prot : ", PORT);
});
//  note all the http request are handled by express js ,
//  and
