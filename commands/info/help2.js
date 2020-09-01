  
const discord = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["commands", "Info", "information", "cmds", "cmd", "categories"],
   category: "info",
   description: "get the commands",
  usage: "help",
  run: (client, message, args) => {
 let Embed = new discord.MessageEmbed()
        .setTitle(`Help`)
        .setDescription(
          `Hey **${message.author.username}** Here are the help commands `
        )
        .setColor(`RED`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
        .setFooter(`Note: Make a channel called edit-log to see the old content of edited messages in this guild!`)
        .addFields(
          { name: "a!help-moderation", value: `Sends you the moderation commands!`, inline: true },
          { name: "a!help-info", value: `Sends you the information commands!`, inline: true },
          { name: "a!help-fun", value: `Sends you the fun commands!`, inline: true },
          { name: "a!help-utility", value: `Sends you the utility commands!`, inline: true },
          { name: "a!help-nsfw", value: `Sends you the nsfw commands!`, inline: true },
          { name: "a!help-music", value: `Sends you the music commands!`, inline: true },
       );
      
      message.channel.send(Embed);
}}
