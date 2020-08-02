  
const { MessageEmbed } = require("discord.js")
const token = require(`./token.json`);


module.exports = {
  name: "refresh",
  usage: "refresh",
  description: "refresh the bot",
  category: "main",
  run: (client, message, args) => {
  
  if(message.author.id !== '638476135457357849') return message.reply('no');
  
  
  bot.destroy();
  bot.login(token);
      
  }
}
