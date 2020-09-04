const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ipban",
    category: "moderation",
    run: async (client, message, args) => {

        const member = args[0];

        if (!member) {
             return message.channel.send(`Please enter an id!`)
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(`${member.user.username} has been ip-banned!`)
        } catch (e) {
            return message.channel.send(`An error occured!`)
        }

    }
}
