const canvacord = require("canvacord");
const discord = require("discord.js")
module.exports = {
    name: 'spank',
    run: async (bot, message, args) => {
        let target =   message.mentions.members.first();
        let avatar1 = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        if(!target) {
           return message.channel.send(":x: || Please mention someone to slap")
        }
        let avatar2 = target.user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.spank(avatar1, avatar2);
        let attachment = new discord.MessageAttachment(image, "slap.gif");
        return message.channel.send(attachment);
        message.delete()
    }
}