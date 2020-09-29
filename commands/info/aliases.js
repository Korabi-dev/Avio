const discord = require("discord.js");
const bot = new discord.Client();
module.exports = {
    name: "aliases",
    description: "Get the bot commands along with the aliases (made by korabi20)!",
    category: "info",
    aliases: ["as"],
    run: async (bot, message, args) => {
        const command = bot.commands.get(cmd).split(",")
        const aliases = bot.commands.get(cmd).split(",")
        const embed = new discord.MessagEmbed()
        .setTitle('Here are my aliases')
        .setDesription(` Commands:\n ${command}\n Aliases:\n ${aliases}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp()
        .setColor("RANDOM")
        message.channel.send(embed)




    }
};