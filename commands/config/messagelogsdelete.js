const discord = require("discord.js")

module.exports = {
    name: "messagelogs-setup",
    description: "There is a big chance I insult you!",
    category: "fun",
    run: async (bot, message, args) => {
        if(!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
          }
          
        let channel1 = message.guild.channels.cache.find(
            (ch) => ch.name === "message-log"
          );

          if(!channel1) {

            return message.channel.send('There is no channel called "message-logs" that i can delete')
          }

       channel1.delete();

       message.channel.send(`Commands complete!`)


    }
}