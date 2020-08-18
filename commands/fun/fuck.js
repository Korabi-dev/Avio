const Discord  = require("discord.js");

module.exports = {
    name: "fuck",
    aliases: ["sex"],
    category: "moderation",
    run: async (client, message, args) => {
    
    if(!message.channel.nsfw){
return message.channel.send(`This channel is not a nsfw channel!`)
}

    
    let target =   message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
      
      if(!target) {
    return message.channel.send(`Please mention someone to well uh...... Fuck`)
}


let embed9 = new discord.MessageEmbed()
      .setTitle("FUCK")
      .setDescription(`Hey ${target}, ${message.author} wants to take things to bed Please reply yes or no`)
      message.channel.send(embed9)




message.channel.awaitMessages(m => m.author.id == target.user.id,
                            {max: 1, time: 30000}).then(collected => {
                            if (collected.first().content.toLowerCase() == 'yes') {
                             message.channel.send('${target} and ${message.author} had a wonderful night :snirk: ')
                               }

                                    else
                                            message.reply('Oh looks like ${target} didn't want to go to bed with ${message.author}');      
                            }).catch(() => {
                                    message.reply('No answer after 30 seconds, command canceled.');
                            });
                            
}
}
