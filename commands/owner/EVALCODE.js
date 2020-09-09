const { MessageEmbed } = require('discord.js');
const discord = require("discord.js")
const bot = new discord.Client();
const realtoken = ('GET STICK BUGGED NOOOOOOOB')
const config = require("../../config.json")
const prefix = require("../../config.json")
const args = message.content.slice(prefix).trim().split(/ +/g);

if(!args[0]){
    const __e___ = new MessageEmbed()
    .setTitle(`No Code Found.`)
    .setColor("RED")
    
    return message.channel.send(__e___)
    }  
            
            const embed = new MessageEmbed()
                .setTitle('Evaluating...')
                .setColor("GREEN")
            const msg = message.channel.send(embed);
            try {
                const data = eval(args.slice(0).join(" ").replace(/```/g, ''));
                const embed = new MessageEmbed()
                    .setTitle('Output: ')
                    .setColor("GREEN")
                    .setDescription(data)
                 msg.edit(embed)
                 msg.react('✅')
                 msg.react('❌')
                const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);
                msg.awaitReactions(filter, { max: 1 })
                    .then((collected) => {
                        collected.map((emoji) => {
                            switch (emoji._emoji.name) {
                                case '✅':
                                    msg.reactions.removeAll();
                                    break;
                                case '❌':
                                    msg.delete()
                                    break;
                            }
                        })
                    })
            } catch (e) {
             const embed = new MessageEmbed()
                    .setTitle(`An Error has occured: 
    ${e}     
    
    `
    
    )
                    .setColor("RED")
                return msg.edit(embed);
            }
