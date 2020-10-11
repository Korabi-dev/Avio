const discord = require("discord.js")

module.exports = {
    name: "qrcode",
    description: "A role utility command",
    category: "utility",
    aliases: ["genqr", "qrgen"],
    run: async (bot, message, args) => { 
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://${args[0]}`
        const embed = new discord.messageEmbed()
        .setTitle("QR Code Generated!")
        .setImage(url.replace('https://', '').replace('http://', ''))
        .setTimestamp()
        message.channel.send(embed)
    }
}