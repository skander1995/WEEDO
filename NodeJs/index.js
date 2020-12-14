const SOCKET_PORT = process.env.PORT || 3000 ;

var cors = require('cors')
var express = require('express');
var app=express()
var routes= require('./routes');
var weedo= require('./routes/weedo');
var server = require('http').createServer(app);
const io = require('socket.io')(server,{cors: {origin: "*",methods: ["GET", "POST"]}});

// ******************* call all routes ***************************

app.use('/api',routes)

server.listen(SOCKET_PORT, function() {
    console.log(new Date + ' - Server is running on port ' + SOCKET_PORT + '!');

});

io.on('connection', function(socket) {
    console.log('A client connected');
    socket.on('message', (message) => {
        console.log(message)
        io.emit(message);
    });
});
require('./routes/weedo')(app,io)


