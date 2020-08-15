const Discord  = require("discord.js");

module.exports = {
    name: "role-add",
    aliases: ["roleadd"],
    category: "moderation",
    run: async (client, message, args) => {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(
          "Sorry but you do not have permission to take roles!"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("I do not have permission to manage roles.");
      }
  
      const user = message.mentions.members.first();
  
    if(!user) {
      let embed8 = new Discord.MessageEmbed()
      .setTitle("Command: r!role-add")
      .setDescription(
      `Description: Remove a role from a user
      Usage: r!role-remove [user] [Role]
      Example: r!roleadd @SaladHenry#7267 Admin`
      )
      .setColor("RANDOM")
      .setFooter(`Made by Korabi20`);
     return  message.channel.send(embed8)
       }
      
      
     let reason = args.slice(1).join(" ")
      
      let muterole = message.guild.roles.cache.find(x => x.name === `${reason}`)
      
      if(!muterole){
let embedo = new Discord.MessageEmbed()
      .setTitle("Command: r!role-add")
      .setDescription(
      `Description: Remove a role from a user
      Usage: r!role-remove [user] [Role]
      Example: r!roleadd @SaladHenry#7267 Admin`
      )
      .setColor("RANDOM")
      .setFooter(`Made by Korabi20`);
     return  message.channel.send(embedo)



}
        
   if(user.roles.cache.has(muterole)) {
        return message.channel.send(`Given User already has the role : "**${reason}**" `)
      }

      
      user.roles.add(muterole)
      
      
      
      await message.channel.send(`You gave the "**${reason}**" role to ${user}`)
      
      user.send(`The role "**${reason}**" was given to you in **${message.guild.name}**`)
        
        user.roles.remove(muterole)
      
  
    }
  };
