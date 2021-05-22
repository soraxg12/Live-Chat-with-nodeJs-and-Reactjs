import "reflect-metadata";
import express from 'express'
import {routes} from './routes'
import createConnection from "./src/database"
import cors from 'cors'
const app = express()
import * as socketio from "socket.io";

app.use(cors())
app.use(express.json())
app.use("/",routes)

app.set("port", process.env.PORT || 3333);

let http = require("http").Server(app);
let socket = require("socket.io")
let io = socket(http)

let user = 0

createConnection()

io.on("connection", function(socket: any) {
    user++
    console.log("a user connected",user,socket.id);
    socket.emit('user_on',user)

    socket.on('disconnect', () => {
    user--
    console.log("a user connected",user);
    socket.emit('user_on',user)
    });
});

io.on("connection", function(socket: any) {
  socket.on("message", function(message:object) {
    console.log(message);
  io.emit("message", message);
  });
});

io.on("connection", function(socket: any) {
  socket.on("escrevendo", function(name:object) {
    console.log(name);
  io.emit("escrevendo", name);
  });
});


export {http}