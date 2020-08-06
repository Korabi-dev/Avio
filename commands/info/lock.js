const discord = require("discord.js");

module.exports = {
  name: "lock",
  category: "info",
  description: "get the commands",
  usage: "help",
  run: (client, message, args) => {

let author = message.guild.members.cache.get(message.author.id)

        if(author.hasPermission(['MANAGE_CHANNELS'])){
            message.channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: false, SEND_TTS_MESSAGES: false, ATTACH_FILES: false, EMBED_LINKS: false } )
            message.channel.send('Successfully locked channel!')
        }
        }
