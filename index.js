const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=> {
  socket.on('chat1', msg=> {
    io.emit('chat2', msg);
  });
});

http.listen(port, ()=> {
  console.log(`Socket.IO server runinig at http://localhost:${port}/`);
});


