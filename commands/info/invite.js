const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "invite link",
  usage: "invite",
  run: (client, message, args) => {
  message.channel.send('Here Is my invite link :wink:  https://discordapp.com/oauth2/authorize?client_id=736933259178541177&scope=bot&permissions=2146958847') 
}}