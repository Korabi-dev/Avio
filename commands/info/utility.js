  
const discord = require("discord.js");

module.exports = {
  name: "help-utility",
   category: "info",
   description: "get the commands",
  usage: "help",
  run: (client, message, args) => {
   let embed = new discord.MessageEmbed()
    .setTitle("Commands: Utility")
    .setDescription(` Prefix,announce,whois,giveaway,poll,suggest,snipe,oldest,ping,findalt,report,emoji,timer,invite,slowmode,embedify,membercount.`)
    .setColor("ORANGE")
    .setFooter(`Made by Korabi20#8725 and owned by glitch!#3950`);
    
   
    message.channel.send(`Utility Commands Sent! :white_check_mark:`)
    message.author.send(embed)
}}
