const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "nsuggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "main",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "name-suggestions"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - name-suggestions")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("NAME SUGGESTION:" + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send("Sent Your Suggestion to " + `${channel}` )
    
  }
}
