const { Message, send } = require("discord.js");

let config = require('../../config.json')
module.exports = (bot) => {
  console.log(`${bot.user.username} is now online!`);
 
  
  bot.user.setPresence({ activity: { name: `With Avio Developers | ${config.prefix}help | Avio Help` }, status: 'online' })
  

  
};
