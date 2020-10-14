const blacklist = require("../../models/blacklist");
module.exports = {
  name: "unblacklist",
  description: "unBlacklist a user",
  category: "config",
  aliases: ["unbl"],
  run: async (bot, message, args) => {
   if(message.author.id !== '638476135457357849') return message.channel.send(":x: || This Command Is For My developer Only!")
   let target =   message.mentions.members.first() ||
   message.guild.members.cache.get(args[0]);
  
   if(!target) return message.channel.send(`:x: || Lol give me someone to unblacklist`);
      
  blacklist.findOne(
        { blacklistID: id },
        async (err, data) => {
          if (err) throw err; 
      if (data) {
       data.delete()
       return message.channel.send(`Unblacklisted User With ID: ${data.blacklistID} And Reason: ${data.reason}`)
          } else if (!data) {
          return message.channel.send(`This user Is Not Blacklisted!`)
        }
    });
      }
    }
