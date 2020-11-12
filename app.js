const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

io.on("connection", (socket) => {
  console.log("a user connected");
})

http.listen(port, () => {
  console.log(`'listening on ${port}`);
})