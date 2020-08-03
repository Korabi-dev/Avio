const discord = require("discord.js");

module.exports = {
  name: "membercount",
  category: "info",
  description: "A simple command that tells how manymembers are in the guild",
  usage: "membercount",
  run: (client, message, args) => {
  message.channel.send(`There are **${message.guild.memberCount}** members in **${message.guild.name}**!`) 
}}
