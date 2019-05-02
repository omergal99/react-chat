var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var app = express();

app.get('/', function (req, res) {
    // res.send('Hello World')
    res.send('<h1>Hello world</h1>')
});

io.on('connection', socket => {

    console.log('an user connected');

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('msg sent', (txt,from) => {
        console.log('we got msg:', txt, 'from', from)
        io.emit('chat new msg', txt , from);
    });

});

const port = process.env.PORT || 9090;
http.listen(port, () => console.log(`server on *:${port}`));