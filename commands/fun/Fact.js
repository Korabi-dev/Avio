const Discord = require('discord.js');
const factful = require('factful.js')

module.exports = {
    name: "fact",
    aliases: ["randomfact"],
    description: "Get a random fact",
    usage:"<fact>",
    category:"fun",
    aliases: null,
    run: async (client,message,args) =>{
        const embed = new Discord.MessageEmbed()
        .setTitle('Random Fact')
        .setDescription(`${factful.fact().all}`)
        .setColor('RANDOM')
        message.channel.send(embed)
    }
}
