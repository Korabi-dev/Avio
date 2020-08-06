const discord = require("discord.js");

module.exports = {
  name: "unlock",
  category: "info",
  description: "get the commands",
  usage: "help",
  run: (client, message, args) => {

let author = message.guild.members.cache.get(message.author.id)

        let author = message.guild.members.cache.get(message.author.id)

        if(author.hasPermission(['MANAGE_CHANNELS'])){
            message.channel.updateOverwrite(message.guild.roles.everyone, { SEND_MESSAGES: true } )
            message.channel.send('Successfully unlocked channel!')
        }
        }
