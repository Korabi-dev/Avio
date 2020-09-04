  
const discord = require("discord.js");

module.exports = {
  name: "help-utility",
   category: "info",
   description: "get the commands",
  usage: "help",
  run: (client, message, args) => {
   let embed = new discord.MessageEmbed()
    .setTitle("Commands: Utility")
    .setDescription(` Prefix,whois,giveaway,poll,suggest,snipe,oldest,ping,findalt,report,emoji,timer,invite,slowmode,embedify,membercount,nuke,encode,decode.`)
    .setColor("ORANGE")
    
    
   
    message.channel.send(`Utility Commands Sent! :white_check_mark:`)
    message.author.send(embed)
}}
