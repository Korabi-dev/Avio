const { MessageEmbed } = require('discord.js')
const discord = require('discord.js')

const ms = require('ms')
const os = require('os')
const { utc } = require('moment')




module.exports = {
    name: "bot-info",
    aliases: ["bot info", "botinfo"],
    category: "bot",
    run: async (bot, message, args) => {
        let users = client.guilds.cache.reduce((q, b) => q + b.memberCount, 0); 
        let botcreated = utc(client.user.createdAt).format('D MMMM YYYY')
        const uptimee = os.uptime();

        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('#000000')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `Serving ${client.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `Serving ${client.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Online Bot Users',
                    value: `Serving ${users} people!`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: '👶 Created Date', 
                    value: botcreated,
                    inline: true
                },
                {
                    name: '💻 Server Info (hardware of the bot)',
                    value: `CPU Cores: ${os.cpus().length}`,
                    inline: true
                },
                {
                    name: '🆙 Server Uptime', 
                    value: `${ms(uptimee)}`,
                    inline: true
                }
            )
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())
            .setColor("RANDOM")

        await message.channel.send(embed)
    }
}
