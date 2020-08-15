  
const discord = require("discord.js");

module.exports = {
  name: "help-fun",
  category: "info",
   description: "get the commands",
  usage: "help",
  run: (client, message, args) => {
   let embed = new discord.MessageEmbed()
    .setTitle("Commands: Fun")
    .setDescription(` 8ball,meme,poll,reddit,say,kill,pp,hug,kiss,pat,ship,av,dice.`)
    .setColor("GREEN")
    .setFooter(`Made by Korabi20#8725 and owned by glitch!#3950`);
    
   
    message.channel.send(`Help sent! :white_check_mark:`)
    message.author.send(embed)
}}
