  
  
const Discord = require("discord.js");



module.exports = {
  name: "refresh",
  description: "There is a big chance I insult you!",
  category: "fun",
  run: async (bot, message, args) => {
  
 if (message.author.id !== '638476135457357849')
      return message.channel.send(
        `You do not have premissions to use this command, ${message.author.username} you are not a dev!`
      );
      
      message.channel.send('refreshing wait 10 seconds please!')
   
  
  }
  }
