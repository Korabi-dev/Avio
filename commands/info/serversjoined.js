const Discord = require("discord.js");
const client = new Discord.client();
module.exports = {
  name: "serversjoined",
  description: "Tells how much servers the bot in in",
  category: "info",
  run: async (bot, message, args) => {
  message.channel.send(`The bot is in ${client.guilds.cache.size} servers at this moment!`)
  }
