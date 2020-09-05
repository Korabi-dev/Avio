const discord = require("discord.js");
const message = require("../../events/guild/message");


module.exports = {
    name: "messagelogs-setup",
    description: "There is a big chance I insult you!",
    category: "fun",
    run: async (bot, message, args) => {
        try {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command (Premission needed : Administrator)`)
          }
          let everyone = message.guild.roles.cache.find((x) => x.name == "@everyone")
        let channel1 = message.guild.channels.cache.find(
            (ch) => ch.name === "message-logs"
          );

          const makeacategory = await message.guild.channels.create("avio", {
            type: "category",
            permissionOverwrites: [
              {
                   id: everyone.id,
                   deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
               }
           ]
          })

          const category = message.guild.channels.cache.find((x) => x.name == "avio")

         

          const channel = await message.guild.channels.create("message-logs", {
            type: "text",
            parent: category,
          topic: "Message Logs!",
          permissionOverwrites: [
           {
                id: everyone.id,
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES", "READ_MESSAGE_HISTORY"]
            }
        ]
        })

          if(channel1) {
            return message.channel.send(`There is already a channel nammed "message-logs" in this server!`)
        }

      

        

      

         message.channel.send(`Done!`)

    } catch (e) {
        message.channel.send(`sad the dev made an Oops : ${e}`)

    }
   }
}