const discord = require("discord.js");

module.exports = {
  name: "membercount",
  category: "info",
  description: "A simple command that tells how many members are in the guild",
  usage: "membercount",
  run: (bot, message, args) => {
  message.channel.send(`There are **${message.guild.memberCount}** members in **${message.guild.name}**!`) 
}}
