const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
//le build est ici
app.use('/', express.static('dist'));

const server = app.listen(process.env.SERVER_PORT, function () {
  console.log('CrossfitGame Up on port:', process.env.SERVER_PORT);
});
/* SOCKET TEST*/
const io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  socket.setMaxListeners(0);
  socket.emit('serverUp',{server:'ok'});

  /*socket.on('whoishere', function (whocall) {
    console.log(whocall);
    socket.broadcast.emit('usersConnected',{list:{}, author: whocall});
    //socket.emit('chatmsg',{msg:chatSendByUser.msg, author: 'Vous'});
  });*/


  //whoami
  const whoami = require('./server/ws/whoami');
  socket.on('whoami', whoami);
});