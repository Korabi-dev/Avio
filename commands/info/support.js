const discord = require("discord.js");

module.exports = {
  name: "support",
  category: "info",
  description: "Support Server invite Link",
  usage: "invite",
  run: (client, message, args) => {
  message.channel.send('here is the link to the support server :smile: https://discord.gg/MtFK3V4') 
}}
