  
const discord = require("discord.js");

module.exports = {
  name: "help-moderation",
   category: "info",
   description: "get the commands",
  usage: "help",
  run: (bot, message, args) => {
   let embed = new discord.MessageEmbed()
    .setTitle("Commands: Moderation")
    .setDescription(` report,warn,mute,kick,warns,ban,unban,clearwarnings(clearwarns).`)
    .setColor("RED")
    .setFooter(`Made by Korabi20#8725 and owned by glitch!#3950`);
    
   
    message.channel.send(`Moderation Commands Sent! :white_check_mark:`)
    message.author.send(embed)
}}
