const { Message, send } = require("discord.js");
const chalk = require('chalk');
let config = require('../../config.json')

module.exports = (bot) => {
  bot.user.setPresence({ activity: { name: `${config.prefix}help | ${bot.guilds.cache.size} Servers! ` }, status: 'online' })
  };
