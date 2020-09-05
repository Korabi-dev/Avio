  
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
        .setFooter(`Note: run the command "a!messagelogs-setup" to see the content of messages in this guild, if you want to undo it run the command "a!modlogs-delete"`)
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
