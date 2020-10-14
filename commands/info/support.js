const discord = require("discord.js");

module.exports = {
  name: "support",
  category: "info",
  description: "Get The Support Server invite Link",
  usage: "invite",
  run: (bot, message, args) => {
  message.channel.send('here is the link to the support server :smile: https://discord.gg/wFkb9aV') 
}}
