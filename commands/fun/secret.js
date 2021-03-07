const discord = require("discord.js")
module.exports = {
    name: "screw",
    category: "\"fun\"",
    desription: "Get nasty with someone ;)",
    run: async (bot, message, args) => {
        async function hi(){
        if(message.author.id !== "638476135457357849" || "764901658303922247") return;
        if(!message.mentions.users.first())return message.channel.send("Hey, please mention the person you want to screw 🥵😉")
        if(message.mentions.users.first().id == message.author.id) return message.channel.send("uM, please mention someone else other then u..")
       const msg = await message.channel.send(message.mentions.users.first(), {embed: {
            title: "Screwing 🥵", description: `${message.author} wants to get nasty tonight, do you accept their proposal to screw? 🥵😉`, color: "PURPLE"
        }})
        await msg.react("👍")
        await msg.react("👎")

        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.mentions.users.first().id;
        };
        
        msg.awaitReactions(filter, { max: 1, time: 150000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
                
                if (reaction.emoji.name === '👍') {
                    message.mentions.users.first().send(`You and ${message.author.username} screwed hardd 🥵🥵🥵`)
                    message.author.send(`You and ${message.mentions.users.first().username} screwed hardd 🥵🥵🥵`)
                    await message.channel.send({embed: {
                        title: "Screwing 🥵", description: `${message.author} and ${message.mentions.users.first()} screwed hardd 🥵🥵🥵 `, color: "RED"
                    }})
                } else if(reaction.emoji.name === '👎') {
                    message.mentions.users.first().send(`You refused ${message.author.username}'s proposal to screw..`)
                    message.author.send(`${message.mentions.users.first().username} refused your proposal to screw, R.I.P. `)
                    await message.channel.send({embed: {
                        title: "Screwing 🥵", description: `${message.author} and ${message.mentions.users.first()} screwed hardd 🥵🥵🥵 `, color: "RED"
                    }})
                } 
            })
            .catch(collected => {
                message.reply(`${message.author} R.I.P. looks like the person you wanted to screw didnt even reply...`);
            });
        }
        hi()
    }
}
