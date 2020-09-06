const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unban",
    category: "moderation",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
          }

        const member = args[0];

        if (!member) {
             return message.channel.send(`Please enter an id!`)
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(`${member.user.username} has been unbanned!`)
        } catch (e) {
            return message.channel.send(`${member.user.username} has been unbanned!`)
        }

    }
}
