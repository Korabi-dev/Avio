 const Discord = require("discord.js") 
const { MessageEmbed, } = require("discord.js")
const bot = new Discord.Client();


module.exports = {
  name: "refresh",
  usage: "refresh",
  description: "refresh the bot",
  category: "main",
  run: (client, message, args) => {
  
  if(message.author.id !== '638476135457357849') return message.reply('Developer only!');
  
  message.channel.send('Refreshing....');
    
setTimeout(() => {
bot.detroy()
bot.login()
}, 5000)
    
    message.channel.send('Refreshed.');
      
  }
}
