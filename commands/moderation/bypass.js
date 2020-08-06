const Discord = require("discord.js");

module.exports = {
  name: "av",
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {
  
  
   let embed9 = new discord.MessageEmbed()
      .setTitle("Command: r!kick")
      .setDescription(`${message.author.Username}\'s Avatar`)
      .setImage(`client.user.displayAvatarURL()`)
      .setColor("RANDOM")
      message.channel.send(embed9)
       }
   
    
 
    
  }
};
