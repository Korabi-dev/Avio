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
if(target.id === '736933259178541177'){
if(message.author.id === '638476135457357849') {
       return message.channel.send(`Hey dear dev i know u have a BIG pp but im a robot and i cannnot try make babies since i have no reproducal organs..`)
} else {
       return message.channel.send(`ew no`)

}

}

        if(target.user.id == message.author.id){
return message.channel.send(`Hey ${message.author.username}  How would you do that please elaborate!`)
}

        try {
let embed9 = new discord.MessageEmbed()
      .setTitle("FUCK")
      .setDescription(`Hey ${target}, ${message.author} wants to take things to bed Please react with  👍 or 👎`)
      .setColor('RANDOM')
      const msg = await message.channel.send(embed9)



  msg.react('👍').then(r => {
                            msg.react('👎');
                    });

                
                    msg.awaitReactions((reaction, user) => user.id == target.user.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                            { max: 1, time: 30000 }).then(collected => {
                                    if (collected.first().emoji.name == '👍') {
                                            message.channel.send(`${message.author.username} and ${target} had a wonderful night :smirk:`)
                                            client.destroy();
                                    }
                                    else
                                            message.channel.send(`Oh no looks like there is no action tonight Because ${target} didn\'t wanna go to bed with ${message.author.username}`);
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
