const discord = require("discord.js");

module.exports = {
  name: "nickname",
  run: (client, message, args) => {
  
  let target = message.mentions.members.first();
    
    if(!message.member.hasPermission("MANAGE_NICKNAMES")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }
    
    if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) {
      return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`)
    }
    
    
    if(!target) {
      let embed9 = new discord.MessageEmbed()
      .setTitle("Command: r!nickname")
      .setDescription(
      `Description: Change a members nickname
      Usage: r!nickname [user] [name]
      Example: r!nickname @Korabi20 M | Korabi20!`
      )
      .setColor("RANDOM")
      .setFooter(`Made by Korabi20#0001`);
      message.channel.send(embed9)
       }
    
    
    if(!args[0]) {
 Say the name you want to set please!
}
 
    target.setNickname(args[0])
    
  }
}
