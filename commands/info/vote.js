const discord = require("discord.js")
module.exports = {
    name: "vote",
     category: "info",
     description: "get the commands",
    usage: "help",
    run: (client, message, args) => {
    const embed = new discord.MessageEmbed()
    .setTitle("Click Here To vote!")
    .setURL("https://top.gg/bot/736933259178541177")
    .setFooter("Thank you for voting!")
    }
}