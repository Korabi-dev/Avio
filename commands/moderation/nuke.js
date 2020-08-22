const discord = require('discord.js')

module.exports = {
  name: "nuke",
  description: "Get a meme!",
  category: "fun",
  run: async (bot, message, args) => {

   let embed9 = new discord.MessageEmbed()
      .setTitle("NUKE")
      .setDescription('This channel will be nuked')
      .setColor("RANDOM")
     message.channel.send(embed9)
     
     message.channel.clone()
     message.channel.delete()


}
}
