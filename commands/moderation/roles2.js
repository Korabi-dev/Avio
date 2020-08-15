const Discord = require("discord.js");

module.exports = {
  name: "role-add",
  aliases: ["roleadd"],
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
      return message.channel.send(
        "Sorry but you do not have permission to use this!"
      );
    }

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
      return message.channel.send("I do not have permission to manage roles.");
    }

    const user = message.mentions.members.first();
    
    if(!user) {
      let embed8 = new Discord.MessageEmbed()
      .setTitle("Command: r!roleadd")
      .setDescription(
      `Description: Add a role to a user
      Usage: r!roleadd [user] 
      Example: r!roleadd @SaladHenry#7267 Admin`
      )
      .setColor("RANDOM")
      .setFooter(`Made by Korabi20`);
     return  message.channel.send(embed8)
       }
    
    
    
    
    let reason = args.slice(1).join(" ")
    
    
     if(!reason) {
return message.channel.send(`Please say the role you want to add!`)
}  
   
    
  
    
    let muterole = message.guild.roles.cache.find(x => x.name === `${reason}`)
    
    if(!muterole) {
return message.channel.send(`I could not find a role with the name "**${reason}**" make sure your spelling and capital letters are right please.`)
}
     
    
    
   if(user.roles.cache.has(muterole)) {
   
      return message.channel.send("Given user already has the role: ${reason}!")
    }
    
    console.log('r')
    user.roles.add(muterole);
  

await message.channel.send(`You  gave ${user} the role ${reason}`)
    
    user.send(`Congrats you got the ${reason} role in ${message.guild.name}`)
    
    
 
    
  }
};
