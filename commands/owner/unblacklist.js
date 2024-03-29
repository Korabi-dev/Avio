const blacklist = require("../../models/blacklist");
const discord = require("discord.js")
module.exports = {
  name: "unblacklist",
  description: "unBlacklist a user (dev only)",
  owneronly: true,
  category: "config",
  aliases: ["unbl"],
  run: async (bot, message, args) => {
    let target =   message.mentions.members.first() ||
   message.guild.members.cache.get(args[0]);
   if(!target) return message.channel.send(`:x: || Please mention who to unblacklist <mention/id>`);
   const id = target.user.id || args[0]
  const owners = bot.owners
   if(owners.includes(id)) {
    return message.channel.send(`${message.author} what made you think i would blacklist one of my lovely owners???`)
  }
      
  blacklist.findOne(
        { blacklistID: id },
        async (err, data) => {
          if (err) throw err; 
      if (data) {
       data.delete()
       const embed = new discord.MessageEmbed()
       .setTitle("Unblacklisted!")
       .setDescription(`Unblacklisted ${target} (${target.user.tag})\nPrevious Blacklist Reason: ${data.reason}\nModerator: ${data.moderator}`)
       .setFooter(`User ID: ${target.user.id}`)
       .setColor("GREEN")
       .setTimestamp()
       return message.channel.send(embed)
          } else if (!data) {
          return message.channel.send(`This user Is Not Blacklisted!`)
        }
    });
      }
    }
