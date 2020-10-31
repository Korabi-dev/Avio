const ascii = require('ascii-table');
const { DiscordAPIError } = require('discord.js');
let table = new ascii("Commands");
table.setHeading('Command', 'Status');
const discord = require("discord.js")
const hastebin = require("hastebin.js")
module.exports = {
    name: "cmdstatus",
    category: "info",
    description: "Get the stats of my commands",
    usage: "<cmdstatus>",
    run: async (bot, message, args) => {
        const embed = new DiscordAPIError.MessageEmbed()
        var command = bot.commands.map(c => table.addRow(c.name,'Working! ✅'))
        const haste = new hastebin({})
        const link = haste.post(table.toString()).then(async(link) => {ctx("Here Is The Command Status"+ " " + link)});
    }
}