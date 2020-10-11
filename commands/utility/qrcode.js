const Discord = require('discord.js');
const request = require("request")

module.exports = {
    name: "qrcode",
    description: "A role utility command",
    category: "utility",
    aliases: ["genqr", "qrgen"],
    run: async (bot, message, args) => { 
        request({url: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${args}`, encoding: null}, function(err, res, buffer) {

 let wembed = new Discord.MessageEmbed()
 .attachFiles([{ name: Image.png, attachment: buffer}])
 .setImage('attachment://Image.png')
 message.channel.send(wembed);
});
    }
}


