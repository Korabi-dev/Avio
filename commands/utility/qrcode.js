const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "qrcode",
    description: "A role utility command",
    category: "utility",
    aliases: ["genqr", "qrgen"],
    run: async (bot, message, args) => { 
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${args[0]}`
    message.channel.send("Here Is Your QR Code:")
    message.channel.send(url.replace('https://', '').replace('http://', ''))
    }
}