const discord = require("discord.js");

module.exports = {
  name: "help-music",
  category: "info",
   description: "get the commands",
  usage: "help",
  run: (client, message, args) => {
   let embed = new discord.MessageEmbed()
    .setTitle("Commands: Music")
    .setDescription(`Play,Stop,Join,Leave.`)
    .setFooter(`note: commands are still in development may be a little buggy`)
    .setColor("GREEN")
  
    
   
    message.channel.send(`Music Commands Sent! :white_check_mark:`)
    message.author.send(embed)
}}
