const discord = require('discord.js')
module.exports = {
  name: "serverinfo",
  description: "DM a user in the guild",
  category: "fun",
  run: async (bot, message, args) => {

    let embed9 = new discord.MessageEmbed()
      .setTitle("Server Info")
      .setDescription(`
      Name: ${message.guild.name}
      Owner: ${message.guild.owner}
      Membercount: ${message.guild.membercount}
      Region: ${message.guild.region}
       `)
      .setThumbnail(`${message.guild.iconURL}`)
      .setColor("RANDOM")
      .setFooter(`Info for ${message.guild.name}`);
      message.channel.send(embed9)
       
       
       }
       }