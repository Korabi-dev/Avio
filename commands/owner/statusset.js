const discord = require("discord.js");

module.exports = {
    name: "status",
     category: "owner",
     description: "Owner Only",
    usage: "Onwer only",
    run: async (bot, message, args) => {
        if(message.author.id !== '638476135457357849')return ctx("No thanks!")
        message.delete()
        let embed = new discord.MessageEmbed()
        .setTitle("Ok so we're setting a new status huh? What should the type of this status be?")
        .setColor("BLUE")
        let msg = await ctx(embed)
        let statustype;
        let content;
        let url;
        message.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 1, time: 60000}).then(collected => {
                    statustype = collected.first().content;
                    let emb2 = new discord.MessageEmbed()
                    .setTitle(`Ok so the type will be ${statustype} huh?What will the content contain`)
                    collected.first().delete()
                    msg.edit(emb2)
                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                        {max: 1}).then(collected => {
                            content = collected.first().content;
                            collected.first().delete()
                            if(statustype.toLowerCase().includes("streaming")){
                                var emb3 = new discord.MessageEmbed()
                                .setTitle("Oh so we're straming huh?What is the link to the stream i wanna whatch please...")
                                .setColor("PURPLE")
                                msg.edit(emb3)
                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                    {max: 1}).then(collected => {
                                        url = collected.first().content
                                        bot.user.setActivity(content, {
                                            type: statustype,
                                            url: url
                                           });
                                        let emb4 = new discord.MessageEmbed()
                                        .setTitle(`Okay Stutus Set!\nInfo:\nType:${statustype}\nContent:${content}\nurl: ${url}`)
                                           .setColor("GREEN")
                                           .setTimestamp()
                                           return msg.edit(emb4)
                                    });
                            } else if(!statustype.toLowerCase().includes("streaming")){
                                bot.user.setActivity(content, {
                                    type: statustype
                                    });
                                    let emb5 = new discord.MessageEmbed()
                                    .setTitle(`Okay Stutus Set!\nInfo:\nType:${statustype}\nContent:${content}`)
                                       .setColor("GREEN")
                                       .setTimestamp()
                                       return msg.edit(emb4)
                                      }
                            
                        })
                }).catch(() => {
                    ctx(':x: || Command timed out!')
            });
       
    }
}
