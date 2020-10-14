const canvacord = require("canvacord");
const discord = require("discord.js")
module.exports = {
    name: 'wanted',
    run: async (bot, message, args) => {
        let target =   message.mentions.members.first();
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        if(target) {
            avatar = target.user.displayAvatarURL({ dynamic: false, format: 'png' });
        }
        let image = await canvacord.Canvas.wanted(avatar);
        let attachment = new discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
    }
}