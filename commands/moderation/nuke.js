const discord = require('discord.js')

module.exports = {
  name: "nuke",
  description: "Get a meme!",
  category: "fun",
  run: async (bot, message, args) => {
    
    
      if(!message.member.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }
    
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`)
    }

   let embed9 = new discord.MessageEmbed()
      .setTitle("NUKE")
      .setDescription(`This channel was nuked nuked by **${message.author.username}**`)
      .setColor("RANDOM")
     .setImage("https://media.tenor.com/images/758fc78b8f17c82e8aeb2aa7ef4ca592/tenor.gif")
     
     const newchannel = await message.channel.clone()
      message.channel.delete()
    newchannel.send(embed9)


}
}
