const canvacord = require("canvacord");
const discord = require("discord.js")
module.exports = {
    name: 'youtubecomment',
    aliases: ["youtube", 'yt', "ytcomment"],
    run: async (bot, message, args) => {
        let target =   message.mentions.members.first() || message.author;
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        if(target) {
            avatar = target.user.displayAvatarURL({ dynamic: false, format: 'png' });
        }
        let username = target.user.username;
        let comment = args.slice(1).join(" ")
        let dark = false;
        if(message.content.toLowerCase().includes("//dark")) {
        dark = true;
        }
        let image = await canvacord.Canvas.jail(avatar, username, comment, dark);
        let attachment = new discord.MessageAttachment(image, "triggered.gif");
        return message.channel.send(attachment);
    }
}