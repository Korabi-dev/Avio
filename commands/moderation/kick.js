const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "kick <@user> <raeson>",
  run: (client, message, args) => {
    
    if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }
    
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`)
    }
    
    let target =   message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    
    if(!target) {
      let embed9 = new discord.MessageEmbed()
      .setTitle("Command: a!kick")
      .setDescription(
      `Description: Kick a member
      Usage: a!kick [user] [reason]
      Example: a!kick @Korabi20 Alt!`
      )
      .setColor("RANDOM")
      .setFooter(`Made by Korabi20 and owned by glitch!`);
      message.channel.send(embed9)
       }
    
    if(target.id === message.author.id) {
     return message.channel.send(`**${message.author.username}**, You can not kick yourself`)
    }
    
  if(!args[1]) {
    return message.channel.send(`**${message.author.username}**, Please Give Reason to kick`)
  }
    
  let reason = args.slice(1).join(" ")

  let embed = new discord.MessageEmbed()
  .setTitle("Action: Kick")
  .setDescription(`Kicked ${target} with reason of: ${reason}`)
  .setColor("#ff2050")
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
  .setFooter(`Kicked by ${message.author.username}`);
  
  message.channel.send(embed)
    
    target.kick(args[1]);
    
    target.send(`You were kicked in **${message.guild.name}** With reason: ${reason}`)
    
    console.log(`${message.author.username} just kicked ${target} with reason : ${reason}`)
    
  }
}
