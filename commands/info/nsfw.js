const discord = require("discord.js");

module.exports = {
  name: "help-nsfw",
  category: "info",
   description: "get the commands",
  usage: "help",
  run: (bot, message, args) => {
   let embed = new discord.MessageEmbed()
    .setTitle("Commands: NSFW")
    .setDescription(`Fuck,pp.`)
    .setColor("GREEN")
  
    
   
    message.channel.send(`NSFW Commands Sent! :white_check_mark:`)
    message.author.send(embed)
}}
