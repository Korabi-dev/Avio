  
const discord = require("discord.js");

module.exports = {
  name: "status",
  category: "info",
  description: "get the status",
  usage: "status",
  run: (client, message, args) => {
 message.channel.send('Bot status: Online :white_check_mark:!')
}}
