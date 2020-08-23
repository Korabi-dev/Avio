const discord = require("discord.js");

module.exports = {
  name: "credits",
  aliases: ["botinfo"],
   category: "info",
   description: "get the commands",
  usage: "help",
  run: (client, message, args) => {
   let embed = new discord.MessageEmbed()
    .setTitle("Credits!")
    .setDescription(`Hey ${message.author.username} this bot is brought to you by
  **Korabi20- Developer**
  **glitch!- Owner**
`)
    .setColor("RANDOM")
    .setFooter(`If you need any help dm them!`)
    
   
    
    message.channel.send(embed)
}}
