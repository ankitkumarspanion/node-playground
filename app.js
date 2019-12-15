const http = require('http');

// create an express instance
const express = require('express');
var app = express();

// middleware initialization
app.use((request, response, next) => {
  console.log('in middleware');
  next();
})



const server = http.createServer(app);

server.listen(4000);