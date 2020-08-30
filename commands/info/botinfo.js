const { MessageEmbed } = require('discord.js')
const discord = require('discord.js')
const bot = new discord.Client();
const uptime = require('ms')(bot.uptime)
const os = require('os')
module.exports = {
    name: "bot-info",
    aliases: ["bot info", "botinfo"],
    category: "bot",
    run: async (client, message, args) => {
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
                    name: '👥 Server Users',
                    value: `Serving ${client.users.cache.size} people!`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Created Date',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: '💻 Server Info (hardware of the bot)',
                    value: `Cores: ${os.cpus().length}`,
                    inline: true
                },
                   {
                    name: '🔼 UpTime',
                    value: `${uptime} minutes`,
                    inline: true
                }
            )
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())
            .setColor("RANDOM")

        await message.channel.send(embed)
    }
}
