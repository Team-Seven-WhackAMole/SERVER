const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ? SERVER VARIABLE STARTS HERE
let rooms = [];
let onlineUsers = [];

// ! IO STARTS HERE
io.on('connection', (socket) => { // ? event pada saat user connect
  console.log('a user connected');
  // ! Format event here
  // ? socket.on('event', payload => { nerima data dan event dari server
  // ?   manipulasi payload disini
  // ?   io.emit('event1', payload1) balikin data ke semua client include sender
  // ?   socket.broadcast.emit('event2', payload2) balikin data ke semua client kecuali sender
  // ?   socket.emit('event3', payload3) balikin data ke sender saja
  // ? })
  socket.on('login', (username) => {
    onlineUsers.push(username);
    io.emit('newUser', onlineUsers);
  })
  socket.on('disconnect', () => { // ? event pada saat user disconnected 
     console.log('user disconnected')
   })
});

  http.listen(port, () => console.log(`Whack-a-mole is listening on ${port}`));