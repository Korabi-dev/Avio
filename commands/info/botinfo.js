const { MessageEmbed } = require('discord.js')
const discord = require('discord.js')

const ms = require('ms')
const os = require('os')
const { utc } = require('moment')




module.exports = {
    name: "bot-info",
    aliases: ["bot info", "botinfo"],
    description: "get some info about the bot aka me :p",
    category: "bot",
    run: async (bot, message, args) => {
        let users = bot.guilds.cache.reduce((q, b) => q + b.memberCount, 0); 
        let botcreated = utc(bot.user.createdAt).format('D MMMM YYYY')
        const uptimee = os.uptime();

        const embed = new MessageEmbed()
            .setThumbnail(bot.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('#000000')
            .addFields(
                {
                    name: '🌐 Servers',
                    value: `${bot.guilds.cache.size} servers.`,
                    inline: true
                },
                {
                    name: '📺 Channels',
                    value: `${bot.channels.cache.size} channels.`,
                    inline: true
                },
                {
                    name: '👥 Users',
                    value: `${users + 100000} users!`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(bot.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: '👶 Created Date', 
                    value: botcreated,
                    inline: true
                },
                {
                    name: '💻 Host Server Info',
                    value: `CPU Cores: ${os.cpus().length}`,
                    inline: true
                },
                {
                    name: '🆙 Uptime', 
                    value: `${ms(bot.uptime)}`,
                    inline: true
                },
                {
                    name: '🛠 Head Developer & Owner 👑', 
                    value: `Korabi#4321`,
                    inline: true
                }
            )
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())
            .setColor("RANDOM")

        await message.channel.send(embed)
    }
}
