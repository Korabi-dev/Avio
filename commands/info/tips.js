const discord = require("discord.js")
const config = require("../../config.json")
const db = require("../../db")
module.exports = {
    name: "tips",
    category: "info",
    description: "Get some tips about avio!",
    run: async (bot, message, args) => {
        let newPrefix = (await db.get(`Prefix_${message.guild.id}`))
    ? await db.get(`Prefix_${message.guild.id}`)
    : config.prefix;
        const embed = new discord.MessageEmbed()
        .setTitle("Tips:")
        .setDescription(`Useful Commands:\n${newPrefix}toggleantiswear\n${newPrefix}messagelogs-setup\n${newPrefix}messagelogs-delete`)
        .setColor("RANDOM")
        message.channel.send(embed)
    }
}