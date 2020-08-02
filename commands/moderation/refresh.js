  
const { MessageEmbed } = require("discord.js")



module.exports = {
  name: "refresh",
  usage: "refresh",
  description: "refresh the bot",
  category: "main",
  run: (client, message, args) => {
  
  if(message.author.id !== '638476135457357849') return message.reply('Developer only!');
  
  message.channel.send('Refreshing....');
    
  bot.destroy();
  bot.login(process.env.BOT_TOKEN);
    
    message.channel.send('Refreshed.');
      
  }
}
