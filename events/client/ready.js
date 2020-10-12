const { Message, send } = require("discord.js");
const chalk = require('chalk');
let config = require('../../config.json')

module.exports = (bot) => {
  console.log(chalk.blue(`${bot.user.username} is now online!`));
 
  
  bot.user.setPresence({ activity: { name: `With Avio Developers | ${config.prefix}help | Avio Help` }, status: 'online' })
  

  
};
