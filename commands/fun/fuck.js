const discord  = require("discord.js");

module.exports = {
    name: "fuck",
    aliases: ["sex"],
    category: "moderation",
    run: async (client, message, args) => {
    


    
    let target =   message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
      
      if(!target) {
    return message.channel.send(`Please mention someone to well uh...... Fuck`)
}

        if(target.user.id == message.author.id){
return message.channel.send(`Hey ${message.author.username}  How would you do that please elaborate!`)
}

let embed9 = new discord.MessageEmbed()
      .setTitle("FUCK")
      .setDescription(`Hey ${target}, ${message.author} wants to take things to bed Please reply yes or no`)
      .setColor('RANDOM')
      message.channel.send(embed9)




message.channel.awaitMessages(m => m.author.id == target.user.id,
                            {max: 1, time: 30000}).then(collected => {
                            if (collected.first().content.toLowerCase() == 'yes') {
                             message.channel.send(`${target} and ${message.author} had a wonderful night :smirk: `)
                               }

                                    else
                                        message.channel.awaitMessages(m => m.author.id == target.user.id,
                            {max: 1, time: 30000}).then(collected => {
                            if (collected.first().content.toLowerCase() == 'no') {
                             message.channel.send(`Oh looks like ${target} didn\'t want to go to bed with ${message.author}`);   
                               }
                                        });
                                               
                            }).catch(() => {
                                    message.channel.send(`No answer after 30 seconds, command canceled.`);
                            });
                            
}
}
