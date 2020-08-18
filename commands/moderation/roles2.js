const Discord  = require("discord.js");

module.exports = {
    name: "role-add",
    aliases: ["roleadd"],
    category: "moderation",
    run: async (client, message, args) => {
      if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Sorry but you do not have permission to give roles!"
        );
      }
  
      if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("I do not have permission to manage roles.");
      }
  
      const user = message.mentions.members.first();
  
    if(!user) {
      let embed8 = new Discord.MessageEmbed()
      .setTitle("Command: a!role-add")
      .setDescription(
      `Description: Add a role to a user
      Usage: a!role-remove [user] [Role]
      Example: a!roleadd @SaladHenry#7267 Admin`
      )
      .setColor("RANDOM")
      .setFooter(`Made by Korabi20
    note : you have to put the exact role name with all caps the same as the role name.`);
     return  message.channel.send(embed8)
       }
      
      
     let reason = args.slice(1).join(" ")
      
      let muterole = message.guild.roles.cache.find(x => x.name === `${reason}`)
      
      if(!muterole){
let embedo = new Discord.MessageEmbed()
      .setTitle("Command: a!role-add")
      .setDescription(
      `Description: Add a role to a user
      Usage: a!role-remove [user] [Role]
      Example: a!roleadd @SaladHenry#7267 Admin`
      )
      .setColor("RANDOM")
       .setFooter(`Made by Korabi20
    note : you have to put the exact role name with all caps the same as the role name.`);     
return  message.channel.send(embedo)
}
        
   if(user.roles.cache.has(muterole)) {
        return message.channel.send(`Given User already has the role : "**${reason}**" `)
      }

      
      user.roles.add(muterole)
      
      
      
      await message.channel.send(`You gave the "**${reason}**" role to ${user}`)
      
      user.send(`The role "**${reason}**" was given to you in **${message.guild.name}**`)
        
        
      
  
    }
  };
