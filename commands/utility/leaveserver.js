const Discord = require("discord.js");

module.exports = {
  name: "leaveguild",
  description: "A role utility command",
  category: "utility",
  run: async (bot, message, args) => {

if(message.author.id !== '638476135457357849') return;


bot.guilds.cache.get(args[0]).leave();

message.channel.send('Left that server!')


}
}
