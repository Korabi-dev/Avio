const DBL = require('dblapi.js');
const express = require('express');
const http = require('http');
const discord = require("discord.js")
const bot = new discord.Client();


const app = express();
const server = http.createServer(app);
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczNjkzMzI1OTE3ODU0MTE3NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk5NDIzNzM3fQ.5jgKuau0whq5mY93LsijpQO8eu2h6jjlD3TqqvW2urE',{ webhookPort: 5000, webhookAuth: 'AVIO' }, bot);
const host = '54.84.138.60';

dbl.webhook.on('ready', hook => {
  console.log(`Webhook running with path ${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  console.log("EEEEEEEEEEEEEEEEEEEEEEEEE")
});

app.get('/', (req, res) => {
  // ..
});

server.listen(5000, host, () => {
  console.log('Listening');
  });

  
  