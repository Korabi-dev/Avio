const discord = require("discord.js")

const token = require("../../token.json")
module.exports = {
    name: "refresh",
    owneronly: true,
  aliases: ["restart", "reboot", "reload", "off/on", "devrefresh"],
    category: "owner",
    run: async (bot, message, args) => {
         await message.channel.send(`Refreshing!`)
        bot.destroy();
        setTimeout(() => {
          bot.login(token.Token);
        }, 30000);
        
        
    }
}
