const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'eval-glitch',
    run: async (client, message, args) => {
        if (message.author.id !== '661676670482251796') {
const __e__ = new MessageEmbed()
.setTitle(`This command is only for glitch if you are a dev you will have your own command!`)
.setColor("RED")

return message.channel.send(__e__)
}
      if(!args[0]){
const __e___ = new MessageEmbed()
.setTitle(`No Code Found.`)
.setColor("RED")

return message.channel.send(__e___)
}  
        
        const embed = new MessageEmbed()
            .setTitle('Evaluating...')
            .setColor("GREEN")
        const msg = await message.channel.send(embed);
        try {
            const data = eval(args.slice(0).join(" ").replace(/```/g, ''));
            const embed = new MessageEmbed()
                .setTitle('Output: ')
                .setColor("GREEN")
                .setDescription(await data)
            await msg.edit(embed)
            await msg.react('✅')
            await msg.react('❌')
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
            return await msg.edit(embed);

        }
    }
}
