const discord = require('discord.js')

module.exports = {
  name: "nuke",
  description: "Delete all the messages in a channel (deletes the channel and makes a new one)",
  category: "fun",
  run: async (bot, message, args) => {
    
    
      if(!message.member.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }
    
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`)
    }


    try {
      let embed90 = new discord.MessageEmbed()
            .setTitle("NUKE")
            .setDescription(`Hey ${message.author.username} are you sure you want to nuke this channel this will delete it and make a new one Please react with  👍 or 👎`)
            .setColor('RANDOM')
            const msg = await message.channel.send(embed90)
      
      
      
        msg.react('👍').then(r => {
                                  msg.react('👎');
                          });
      
                      
                          msg.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                                  { max: 1, time: 30000 }).then(async collected => {
                                          if (collected.first().emoji.name == '👍') {
                                            let embed9 = new discord.MessageEmbed()
                                            .setTitle("NUKE")
                                            .setDescription(`This channel was nuked nuked by **${message.author.username}**`)
                                            .setColor("RANDOM")
                                                                                      
                                              
                                             const newchannel = await message.channel.clone()
                                             newchannel.edit({position: mc.position})
                                             message.channel.delete()
                                             newchannel.send(embed9)
                                                  
                                          }
                                          else
                                                  message.channel.send(`Command canceled!`);
                                                  msg.delete();
                                  }).catch(() => {
                                          message.channel.send(`No Reaction after 30 seconds, command canceled!`)
                                  });
                                  
              
              } catch (e) {
               const embed = new discord.MessageEmbed()
                      .setTitle(`An Error has occured: ${e}`)
                  return message.channel.send(embed)
              }
              



 

}
}
