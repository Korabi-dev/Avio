const blacklist = require("../../models/blacklist");
module.exports = {
  name: "blacklist",
  description: "Blacklist a user",
  category: "config",
  aliases: ["bl"],
  run: async (bot, message, args) => {
   if(message.author.id !== '638476135457357849') return message.channel.send(":x: || This Command Is For My developer Only!")
   let target =   message.mentions.members.first() ||
   message.guild.members.cache.get(args[0]);
   let reason2 = args.slice(1).join(" ")
   const id = target.user.id || args[0];
      
   if(!target) return message.channel.send(`:x: || Lol give me someone to blacklist`);
   if(!reason2) return message.channel.send(`:x: || Give me a reason to blacklist the user lol`)

  blacklist.findOne(
        { blacklistID: id },
        async (err, data) => {
          if (err) throw err; 
      if (data) {
       return message.channel.send(`User Is Already Blacklisted With Reason : ${data.reason} || User ID ${data.blacklistID}`)
          } else if (!data) {
          let newData = new blacklist({
            blacklistID: id,
            reason: reason2,
          });
          newData.save();
          message.channel.send(
            `User Blacklisted Reason: ${reason2}`
          );
        }
    });
      }
    }
