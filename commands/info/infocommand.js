  
const discord = require("discord.js");

module.exports = {
  name: "help-info",
 category: "info",
   description: "get the commands",
  usage: "help",
  run: (client, message, args) => {
   let embed = new discord.MessageEmbed()
    .setTitle("Commands: Info")
    .setDescription(` prefix,snipe,oldest,ping,findalt,emoji,support,invite,membercount,servers,docs,fact.`)
    .setColor("#ff2050")
    .setFooter(`Made by Korabi20#8725 and owned by glitch!#3950`);
    
   
    message.channel.send(`Info Commands Sent! :white_check_mark:`)
    message.author.send(embed)
}}
