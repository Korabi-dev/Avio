const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban a member of the current guild(server)",
  usage: "ban <@user> <raeson>",
  run: async(bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return;
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I don't hve the rquired permission of `Ban Members`.")
    let user = message.mentions.users.first()
    var is = false
    var reason = "Un-specified!"
    var candm = true;
    var wasbanned = true;
    if(!user){is = true}
    if(!user && !args[0]) return message.channel.send("Please mention someone to ban.")
    if(is == false){
      if(args[1]) reason = args.slice(1).join(" ")
      user = message.guild.member(user.id)
      if(user.hasPermission("ADMINISTRATOR") || user.hasPermission("BAN_MEMBERS")|| user.hasPermission("KICK_MEMBERS") || user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("This user has administrative permissions, I cannot ban them")
      message.guild.members.ban(user.id,{reason: `Banned By ${message.author.tag}(${message.author.id}), reason: ${reason}`}).catch((e) => {wasbanned = false}).catch((e) => {wasbanned = false})
      if(wasbanned == true){
      try{
        user.send(`You have been banned in ${message.guild.name}, reason: ${reason}`)
      }catch(e){
        candm = false
      }
    }
    if(wasbanned == false) return message.channel.send("I could not ban this user.")
    if(candm == false){
      const embed = new discord.MessageEmbed().setTitle("Banned").setDescription(`${user.user.tag} was banned. **I could not DM them.**`).setColor("GREEN")
      return message.channel.send(embed)
    }
    const embed = new discord.MessageEmbed().setTitle("Banned").setDescription(`${user.user.tag} was banned.`).setColor("GREEN")
     message.channel.send(embed)
    } else if(is == true){
      if(args[1]) reason = args.slice(1).join(" ")
      if(!args[0])return message.channel.send("Please mention someone to ban.")
       message.guild.members.ban(args[0], {reason: `Banned By ${message.author.tag}(${message.author.id}), reason: ${reason}`}).catch((e) => {wasbanned = false})
      if(wasbanned == false) return message.channel.send("I could not ban this user.")
      const embed = new discord.MessageEmbed().setTitle("Banned").setDescription(`This user was banned.`).setColor("GREEN")
     message.channel.send(embed)
    } else {
      message.channel.send("There was an error (x0x0x0x0x0x1, check docs page 13 listing 5)")
    }
  }
 }
