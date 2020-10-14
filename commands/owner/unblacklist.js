const blacklist = require("../../models/blacklist");
const discord = require("discord.js")
module.exports = {
  name: "unblacklist",
  description: "unBlacklist a user (dev only)",
  category: "config",
  aliases: ["unbl"],
  run: async (bot, message, args) => {
   if(message.author.id !== '638476135457357849') return message.channel.send(":x: || This Command Is For My developer Only!")
   let target =   message.mentions.members.first() ||
   message.guild.members.cache.get(args[0]);
   if(!target) return message.channel.send(`:x: || Please mention who to unblacklist <mention/id>`);
   const id = target.user.id || args[0]
  
   
      
  blacklist.findOne(
        { blacklistID: id },
        async (err, data) => {
          if (err) throw err; 
      if (data) {
       data.delete()
       const embed = new discord.MessageEmbed()
       .setTitle("Unblacklisted!")
       .setDescription(`Unblacklisted ${target} (${target.user.tag})\nReason: ${data.reason}`)
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
