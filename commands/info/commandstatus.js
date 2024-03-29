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
        if(message.author.id !== '638476135457357849'){
            return ctx(":x: || I think this command is meant for <@638476135457357849> (Korabi20) since it's irelevant to other people")
        }
        var command = bot.commands.map(c => table.addRow(c.name,'Working! ✅'))
        const haste = new hastebin({})
        const link = haste.post(table.toString()).then(async(link) => {
            const embed = new discord.MessageEmbed().setTitle("Commands status!")
            .setDescription(`See The commands Status [Here](${link})`)
            .setColor("RANDOM")
            ctx(embed)
        });
    }
}