const { black } = require("chalk");
const { MessageEmbed } = require("discord.js")
const moment = require("moment")
const blacklist = require("../../models/blacklist")

module.exports = {
  name: "userinfo",
  aliases: ["whois", "user"],
  usage: "userinfo <MENTION>",
  description: "Get advance stats of given person or yourself",
  run: async (client, message, args) => {

    let blacklistedd = "false";
    

    let user = message.mentions.members.first();
    if(!user){
      user =  message.guild.members.cache.find(args[0]);
    }
 
     if (!user) {
       return message.channel.send(":x: Please mention someone!")
     }


     try {
     blacklist.findOne(
      { blacklistID: user.id },
      async (err, data) => {
        if (err) throw err; 
    if (data) {
      blacklistedd = "true";
        } else if (!data) {
       return;
      }
  });
} catch (e) {
  blacklist.findOne(
    { blacklistID: user.user.id },
    async (err, data) => {
      if (err) throw err; 
  if (data) {
    blacklistedd = "true";
      } else if (!data) {
     return;
    }
})
}
   
      
    let roles = [];
 
    user.roles.cache.forEach((role) => {
      roles.push(role);
    });

    //OPTIONS FOR STATUS

    let stat = {
      online: "https://emoji.gg/assets/emoji/9166_online.png",
      idle: "https://emoji.gg/assets/emoji/3929_idle.png",
      dnd: "https://emoji.gg/assets/emoji/2531_dnd.png",
      offline: "https://emoji.gg/assets/emoji/7445_status_offline.png"
    }

    
    let badges = await user.user.flags
    badges = await badges.toArray();

    let newbadges = [];
    badges.forEach(m => {
      newbadges.push(m.replace("_", " "))
    })

    let embed = new MessageEmbed()
      .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))

    //ACTIVITY
    let array = []
    if (user.user.presence.activities.length) {

      let data = user.user.presence.activities;

      for (let i = 0; i < data.length; i++) {
        let name = data[i].name || "None"
        let xname = data[i].details || "None"
        let zname = data[i].state || "None"
        let type = data[i].type

        array.push(`**${type}** : \***${name} : ${xname} : ${zname}\***`)

        if (data[i].name === "Spotify") {
          embed.setThumbnail(`https://i.scdn.co/image/${data[i].assets.largeImage.replace("spotify:", "")}`)
        }

        embed.setDescription(array.join("\n"))

      }
    }

      //EMBED COLOR BASED ON member
      embed.setColor(user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor)

      //OTHER STUFF 
      embed.setAuthor(user.user.tag, user.user.displayAvatarURL({ dynamic: true }))

      //CHECK IF USER HAVE NICKNAME
      if (user.nickname !== null) embed.addField("Nickname", user.nickname)
      embed.addField("Joined At", moment(user.user.joinedAt).format("LLLL"))
        .addField("Account Created At", moment(user.user.createdAt).format("LLLL"))
        .addField("roles:", roles )
        .addField("Common Information", `ID: \`${user.user.id}\`\nDiscriminator: ${user.user.discriminator}\nBot: ${user.user.bot}\nDeleted User: ${user.deleted}`)
        .addField("Badges", newbadges.join(", ").toLowerCase() || "None")
        .addField("Blacklisted From Using Avio:", blacklistedd)
        .setFooter(user.user.presence.status, stat[user.user.presence.status])



      return message.channel.send(embed).catch(err => {
        return message.channel.send("Error : " + err)
      })



    }



  }
