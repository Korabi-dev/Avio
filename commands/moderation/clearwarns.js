const discord = require("discord.js");
let warns = require("../../models/warns")

module.exports = {
  name: "clearwarns",
  aliases: ["clearwarnings", "resetwarns", "resetwarnings"],
  category: "moderation",
  description: "pp",
  usage: "clearwarns <@user>",
  run: async(bot, message, args) => {
    try {

 if(!message.member.hasPermission("KICK_MEMBERS")) {
         return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
      }

      let user =   message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);  

warns.findOneAndDelete({Guild: message.guild.id, User: user.id },
    () => {
        let embed = new discord.MessageEmbed()
        .setDescription(`:Tick: Sucessfully cleared the warns for ${user}`)
        .setFooter(`${message.author.username} Cleared all warnings for ${user.user.username}`)
        .setTimestamp()
        .setColor("GREEN")
        message.channel.send(embed)
    
     }
    )
    } catch (e) {
        message.channel.send(`:x: Oops an error occured: ${e}`)
    }
  }
}