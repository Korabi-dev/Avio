const Discord = require("discord.js");

module.exports = {
  name: "mute",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async(bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to mute anyone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }
    if(message.guild.id === '751542172196536321'){
      if(message.author.id === '707676620390924364') return;

    }
    if(message.guild.id === '751542172196536321'){
      if(message.author.id === '325558938005143562') return;

    }

    const user = message.mentions.members.first();
    
    if(!user) {
      let embed8 = new Discord.MessageEmbed()
      .setTitle("Command: a!mute")
      .setDescription(
      `Description: Mute a member
      Usage: a!mute [user] [reason]
      Example: a!mute @SaladHenry#7267 Spamming!`
      )
      .setColor("RANDOM")
      .setFooter(`Made by Korabi20 and owned by glitch!`);
      message.channel.send(embed8)
       }
    
    if(user.id === message.author.id) {
      return message.channel.send("I won't mute you -_-");
    }
    
    
    let reason = args.slice(1).join(" ")
    
    
    if(!reason) {
      return message.channel.send("Please Give the reason to mute the member")
    }
    
  
    
    let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
    
      if(!muterole) {
      return message.channel.send("This server do not have role with name `Muted`")
    }
    
    
   if(user.roles.cache.has(muterole)) {
      return message.channel.send("Given User is already muted")
    }
    
    console.log('r')
    user.roles.add(muterole);
    user.roles.cache.map(r => user.roles.remove(r));
    user.roles.add(muterole);
    user.roles.add(muterole);

await message.channel.send(`You muted **${message.mentions.users.first().username}** For \`${reason}\``)
    
    user.send(`You are muted in **${message.guild.name}** For \`${reason}\``)
    
    
 
    
  }
};
