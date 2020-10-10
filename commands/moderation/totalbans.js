  
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bans",
    aliases: ["totalbans", "total-bans"],
    category: "extra",
    run: async(bot, message, args) => {

        message.guild.fetchBans().then(bans => {
            message.channel.send(`there are **${bans.size}** banned users in **${message.guild.name}**`)
        })

    }
}
