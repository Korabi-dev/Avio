const { MessageEmbed, Discord } = require("discord.js");
module.exports = {
  name: "announce",
  description: "Get the bot to say what ever you want in a specific channel.",
  usage: "<channel id> <msg>",
  run: async (bot, message, args) => {
  
  
  
  if(!target){
return message.channel.send('Please mention someone!')
}
  
  

  
      let Embed = new MessageEmbed()
        .setTitle(`AVATAR`)
        .setDescription(`${target}'s avatar`)
        .setImage(traget.user.displayAvatarURL())
        .setColor(`RANDOM`);
      message.channel.send(Embed);
  
  
  
  
  
  
  }
}
