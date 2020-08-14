const { MessageEmbed, Discord } = require("discord.js");
module.exports = {
  name: "avatar",
  description: "Get the bot to say what ever you want in a specific channel.",
  usage: "<channel id> <msg>",
  run: async (bot, message, args) => {
  
      let target = message.mentions.members.first();
  
  if(!target){
let Embed2 = new MessageEmbed()
        .setTitle(`AVATAR`)
        .setDescription(`${message.author.username}'s avatar`)
        .setImage(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
        .setColor(`RANDOM`);
      message.channel.send(Embed2);
}
  
  

  
      let Embed = new MessageEmbed()
        .setTitle(`AVATAR`)
        .setDescription(`${target}'s avatar`)
        .setImage(target.user.displayAvatarURL({ dynamic: true, size: 256 }))
        .setColor(`RANDOM`);
      message.channel.send(Embed);
  
  
  
  
  
  
  }
}
