const express = require('express');
const socket = require('socket.io');
const app = express();

app.use(express.static('public'));

const server = app.listen(4124,()=>{
    console.log(`Server listening at http://localhost:4124`);
});

const io = socket(server);

io.on('connection',(socket)=>{
    console.log('made by socket connection',socket.id);

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    });

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    })
});