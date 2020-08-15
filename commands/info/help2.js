  
const discord = require("discord.js");

module.exports = {
  name: "help",
   category: "info",
   description: "get the commands",
  usage: "help",
  run: (client, message, args) => {
 let Embed = new discord.MessageEmbed()
        .setTitle(`Help`)
        .setDescription(
          `Hey \`${message.author.tag}\` Here are the help commands `
        )
        .setColor(`RED`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
        .addFields(
          { name: "r!help-moderation", value: `Sends you the moderation commands!`, inline: true },
          { name: "r!help-info", value: `Sends you the information commands!`, inline: true },
          { name: "r!help-fun", value: `Sends you the fun commands!`, inline: true },
          { name: "r!help-utility", value: `Sends you the utility commands!`, inline: true },
       );
      
      channel.send(Embed);
}}
