const blacklist = require("../../models/blacklist");
const discord = require("discord.js")
module.exports = {
  name: "blacklist",
  description: "Blacklist a user (only for my dev)",
  owneronly: true,
  category: "config",
  aliases: ["bl"],
  run: async (bot, message, args) => {
   
   let target = message.mentions.members.first()
   if(!target) target = message.guild.members.cache.get(args[0])
   if(!target) return message.channel.send(`:x: || Please mention someone or give me an id!`);
   let reason2 = args.slice(1).join(" ")
 const id = target.id || target
   const owners = bot.owners
 if(owners.includes(id)) {
   return message.channel.send(`:x: || i Won\'t blacklist <@!${id}> they are one of my owners`)
 }
   
   if(!reason2){
     reason2 = "No Reason Provided!"
   }

  blacklist.findOne(
        { blacklistID: id },
        async (err, data) => {
          if (err) throw err; 
      if (data) {
        const alrembed = new discord.MessageEmbed()
        .setTitle("Blacklist!")
       .setDescription(`User Is Already Blacklisted With Reason : ${data.reason}`)
       .setFooter(`User ID: ${data.blacklistID}`)
       .setColor("RED")
       return message.channel.send(alrembed)
          } else if (!data) {
          let newData = new blacklist({
            blacklistID: id,
            reason: reason2,
            moderator: message.author.tag,
          });
          newData.save();
          const newembed = new discord.MessageEmbed()
          .setTitle("Blacklisted!")
          .setDescription(`${target} (${target.user.tag}) has been blacklisted\nReason: ${reason2}\nID: ${id}`)
          .setTimestamp()
          .setColor("RED")
          return message.channel.send(newembed)
        }
    });
      }
    }
