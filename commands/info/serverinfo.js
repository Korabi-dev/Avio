const discord = require('discord.js')
module.exports = {
  name: "serverinfo",
  aliases: ["info"],
  description: "Get the info for the guild",
  category: "info",
  run: async (bot, message, args) => {
    
if (message.guild.rulesChannel === null) message.guild.rulesChannel = ("none or not setup")

    let embed9 = new discord.MessageEmbed()
      .setTitle("Server Info")
      .setDescription(`
      Name: ${message.guild.name}
      Owner: ${message.guild.owner}
      Membercount: ${message.guild.memberCount}
      Region: ${message.guild.region}
      Rules channel: ${message.guild.rulesChannel}
      Created: ${message.guild.createdAt}
       `)
       .setColor("RANDOM")
      .setFooter(`Info for ${message.guild.name}`);
      message.channel.send(embed9)
    message.channel.send(`${message.guild.iconURL}`)
       
       }
       }
