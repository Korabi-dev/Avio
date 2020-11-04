const canvacord = require("canvacord");
const discord = require("discord.js")
module.exports = {
    name: 'invert',
    run: async (bot, message, args) => {
        let target =   message.mentions.members.first();
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        if(target) {
            avatar = target.user.displayAvatarURL({ dynamic: false, format: 'png' });
        }
        let image = await canvacord.Canvas.invert(avatar);
        let attachment = new discord.MessageAttachment(image, "triggered.png");
        return message.channel.send(attachment);
        message.delete()
    }
}