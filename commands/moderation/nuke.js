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

   message.channel.send(`${message.author.username} are you sure you want to nuke ${message.channel.name} this cannot be undone!`)
    
    
     message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {
                                   if (collected.first().content.toLowerCase() == 'yes') {
                                            message.reply("Nuking!")
                                            let embed9 = new discord.MessageEmbed()
                                           .setTitle("NUKE")
                                           .setDescription(`This channel was nuked nuked by **${message.author.username}**`)
                                            .setColor("RANDOM")
                                             .setImage("https://media.tenor.com/images/758fc78b8f17c82e8aeb2aa7ef4ca592/tenor.gif")
     
                                          const newchannel = message.channel.clone()
                                          message.channel.delete()
                                          newchannel.send(embed9)
                                    }

                                    else
                                             message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 30000}).then(collected => {
                                   if (collected.first().content.toLowerCase() == 'no' return message.channel.send('Command Caneled')
                                       
                                    
                                  
                                       
                            }).catch(() => {
                                    message.reply('No answer after 30 seconds, operation canceled.');
                            });


}
}
