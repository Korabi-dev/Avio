  
const discord = require("discord.js");

module.exports = {
  name: "help-fun",
  category: "info",
   description: "get the commands",
  usage: "help",
  run: (client, message, args) => {
   let embed = new discord.MessageEmbed()
    .setTitle("Commands: Fun")
    .setDescription(` 8ball,meme,poll,reddit,say,kill,hug,kiss,pat,ship,av,dice,howgay,talk.`)
    .setColor("GREEN")
   
    
   
    message.channel.send(`Fun Commands Sent! :white_check_mark:`)
    message.author.send(embed)
}}
