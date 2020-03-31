const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.get('/service', async function (req, res) {

  res.header({"Content-Type":"application/json"});
  res.status(200);
  res.send({ok:"ok"});
});

app.use('/', express.static('dist'));

const server = app.listen(process.env.SERVER_PORT, function () {
  console.log('Example app listening on port:', process.env.SERVER_PORT);
});
/* SOCKET TEST*/
const io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
  socket.setMaxListeners(0);
  //socket.emit('chatmsg', {msg:'Bienvenue sur le tchat', author: 'Serveur'});
  socket.on('whoishere', function (whocall) {
    socket.broadcast.emit('usersConnected',{list:{}, author: whocall});
    //socket.emit('chatmsg',{msg:chatSendByUser.msg, author: 'Vous'});
  });
});