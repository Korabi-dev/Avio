  
const discord = require("discord.js");

module.exports = {
  name: "help moderation",
   category: "info",
   description: "get the commands",
  usage: "help",
  run: (client, message, args) => {
   let embed = new discord.MessageEmbed()
    .setTitle("Commands: Moderation")
    .setDescription(` report,warn,mute,kick,warns,ban.`)
    .setColor("RED")
    .setFooter(`Made by Korabi20#8725 and owned by glitch!#3950`);
    
   
    message.channel.send(`Moderation commands sent! :white_check_mark:`)
    message.author.send(embed)
}}
