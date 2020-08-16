const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "ban anyone with one shot xD",
  usage: "ban <@user> <raeson>",
  run: (client, message, args) => {

    if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
      }
      
      if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`)
      }

        let target =   message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    
     
      if(!target) {
        let embed9 = new discord.MessageEmbed()
        .setTitle("Command: r!ban")
        .setDescription(
        `Description: Ban a member
        Usage: a!ban [user] [reason]
        Example: r!ban @Korabi20 Alt!`
        )
        .setColor("RANDOM")
        .setFooter(`Made by Korabi20#0001`);
        message.channel.send(embed9)
         }

      if(target.id === message.author.id) {
        return message.channel.send(`**${message.author.username}**, You can not ban yourself`)
       }
       

       if(!args[1]) {
        return message.channel.send(`**${message.author.username}**, Please Give Reason to ban`)
      }

      let reason = args.slice(1).join(" ")

      let embed = new discord.MessageEmbed()
      .setTitle("Action: Ban")
      .setDescription(`Banned ${target} with reason of: ${reason}`)
      .setColor("#ff2050")
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
      .setFooter(`Banned by ${message.author.username}`);
      
      message.channel.send(embed)
      
      target.ban(args[1]);

     target.send(`You were banned in **${message.guild.name}** with reason: ${reason}`)
    
    console.log(`${message.author.username} just banned ${target} with reason : ${reason}`)
}
 }
