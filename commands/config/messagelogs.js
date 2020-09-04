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

          if(channel1) {
            return message.channel.send(`There is already a channel nammed "message-logs" in this server!`)
        }

        const channel = await message.guild.channels.create(message-log, {
            type: "text",
          topic: "Mail is Direct Opened by **" + message.author.username + "** to make contact with " + message.author.tag
        })



    }
}