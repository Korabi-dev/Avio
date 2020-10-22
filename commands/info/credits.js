const discord = require("discord.js");

module.exports = {
  name: "credits",
  aliases: ["botcredits"],
   category: "info",
   description: "get the credits",
  usage: "help",
  run: (bot, message, args) => {
   let embed = new discord.MessageEmbed()
    .setTitle("Credits!")
    .setDescription(`Hey ${message.author.username} this bot is brought to you by\n**Korabi20- Owner & Developer**`)
    .setColor("RANDOM")
    .setFooter(`If you need any help just use a!support`)
    
   
    
    message.channel.send(embed)
}}
