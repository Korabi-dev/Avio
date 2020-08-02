const { Message, send } = require("discord.js");

let config = require('../../config.json')
module.exports = (bot) => {
  console.log(`${bot.user.username} is now online!`);
  bot.user.setActivity(`With Rioko Developers | ${config.prefix}help`)
  
};
