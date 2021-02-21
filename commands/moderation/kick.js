const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "kick a member of the current guild(server)",
  usage: "kick <@user> <raeson>",
  run: async(bot, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return;
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("I don't hve the rquired permission of `kick Members`.")
    let user = message.mentions.users.first()
    var is = false
    var reason = "Unspecified."
    var candm = true;
    var waskicked = true;
    if(!user){is = true}
    if(!user && !args[0]) return message.channel.send("Please mention someone to kick.")
    if(is == false){
      if(args[1]) reason = args.slice(1).join(" ")
      user = message.guild.member(user.id)
      if(user.hasPermission("ADMINISTRATOR") || user.hasPermission("BAN_MEMBERS")|| user.hasPermission("KICK_MEMBERS") || user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This user has administrative permissions, I cannot kick them")
      user.kick({reason: `kicked By ${message.author.tag}(${message.author.id}), reason: ${reason}`}).catch((e) => {waskicked = false}).catch((e) => {waskicked = false})
      if(waskicked == true){
       user.send(`You have been kicked in **${message.guild.name}**, reason: ${reason}`).catch((e) => {
         candm = false
       })
      }
    if(waskicked == false) return message.channel.send("I could not kick this user.")
    if(candm == true){
    const embed = new discord.MessageEmbed().setTitle("Kicked").setDescription(`${user.user.tag} was kicked.`).setColor("GREEN")
     message.channel.send(embed)
    }else{
      const embed = new discord.MessageEmbed().setTitle("Kicked").setDescription(`${user.user.tag} was kicked. **I could not DM them.**`).setColor("GREEN")
      return message.channel.send(embed)
    }
    } else if(is == true){
      return message.channel.send("Please mention someone to kick (the kick command does not work with ids)")
    } else {
      message.channel.send("There was an error (x0x0x0x0x0x1, check docs page 13 listing 5)")
    }
  }
 }
