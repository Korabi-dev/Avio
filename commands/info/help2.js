const discord = require("discord.js");
const db = require("../../db")
const config = require("../../config.json")
module.exports = {
  name: "help",
  aliases: ["commands", "Info", "information", "cmds", "cmd", "categories"],
   category: "info",
   description: "get the commands",
  usage: "help",
  run: async(bot, message, args) => {
    
    let newPrefix = (await db.get(`Prefix_${message.guild.id}`))
    ? await db.get(`Prefix_${message.guild.id}`)
    : config.prefix;
 let Embed = new discord.MessageEmbed()
        .setTitle(`Help`)
        .setDescription(
          `Hey **${message.author.username}** Here are the help commands `
        )
        .setColor(`RED`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
        .setFooter(`Note: run the command "${newPrefix}messagelogs-setup" to see the content of messages in this guild, if you want to undo it run the command "${newPrefix}messagelogs-delete"`)
        .addFields(
          { name: `${newPrefix}help-moderation`, value: `Sends you the moderation commands!`, inline: true },
          { name: `${newPrefix}help-info`, value: `Sends you the information commands!`, inline: true },
          { name: `${newPrefix}help-fun`, value: `Sends you the fun commands!`, inline: true },
          { name: `${newPrefix}help-utility`, value: `Sends you the utility commands!`, inline: true },
          { name: `${newPrefix}help-nsfw`, value: `Sends you the nsfw commands!`, inline: true },
            );
      
      message.channel.send(Embed);
}}
