const express = require('express');
const fs = require('fs');
const app = express();
require('dotenv').config();

app.use(express.json());

app.get('/service', async function (req, res) {

  res.header({"Content-Type":"application/json"});
  res.status(200);
  res.send({ok:"ok"});
});

app.use('/', express.static('dist'));

app.listen(process.env.SERVER_PORT, function () {
  console.log('Example app listening on port:', process.env.SERVER_PORT);
});