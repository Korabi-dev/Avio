  
const { MessageEmbed } = require("discord.js")
const token = require(`./token.json`);


module.exports = {
  name: "refresh",
  usage: "refresh",
  description: "refresh the bot",
  category: "main",
  run: (client, message, args) => {
  
  if(message.author.id !== 'youramazingidhere') return message.reply('no');
  
  
  bot.destroy();
  bot.login(token);
      
  }
}
