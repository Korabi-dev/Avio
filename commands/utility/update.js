const discord = require("discord.js")
const { OwnerID } = require('../../config.json')
 
module.exports = {
  name: "update",
  category: "info",
  description: "Get the stats of corona",
  usage: "corona all or corona <country>",
  run: async (client, message, args, guild ) => {
 
    if(message.author.id !== OwnerID) return message.channel.send(`I am sorry ${message.author.username} but only the DEV of this bot can use this command`)
 
    if (!args[0]) {
      return message.channel.send(`${message.author.username} I need to know if its a \`Minor\` or \`Mega\` update.`)
    }
 
    if (!args.slice(1).join(" ")) {
      return message.channel.send(`${message.author.username} I need some notes for my upate `)
    }
 
     if(message.channel.name == 'avio-bot-updates' && !message.author.bot){
   client.guilds.cache.forEach(guild=>{
  let channel = guild.channels.cache.find(ch=>ch.name === 'avio-bot-updates');
     if(!channel) return; 
     let embed = new discord.MessageEmbed()
     .setTitle(`${client.user.username} Updates ✉️`)
     .addFields(
       {name: "**Update Type**", 
        value: `${args[0]}`,
       inline: true }, // If you want them inline do true if you don't Want it like that just leave is false
     { name: "**Notes**", 
      value: args.slice(1).join(" "),
      inline: true }
 
     ) 
     .setTimestamp()
     .setAuthor(client.user.tag, client.user.displayAvatarURL())
     .setFooter(message.author.tag , message.author.displayAvatarURL())
     channel.send(embed)
   })
 }
 
    }
}
