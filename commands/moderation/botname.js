const discord = require("discord.js");
const bot = new discord.Client();

module.exports = {
  name: "botnickname",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {
  
  if(message.author.id !== '638476135457357849') {
  
    return message.channel.send('You are not a Developer!')
    console.log(`${message.author.username} just used the nickname command!`)

  }
  
  bot.setNickname(args[0])  
  
  }
