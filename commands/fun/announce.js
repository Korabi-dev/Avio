const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "announce",
  description: "Get the bot to say what ever you want in a specific channel.",
  usage: "<channel id> <msg>",
  run: async (bot, message, args) => {
    
 message.channel.send(`Command is temperarely disabled.`)
};
