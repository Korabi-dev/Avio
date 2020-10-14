const discord = require("discord.js")

module.exports = {
    name: "messagelogs-delete",
    description: "delete the messagelogs in this guild.",
    category: "config",
    run: async (bot, message, args) => {
      try {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command (Premission needed : Administrator)`)
          }
          
        let channel1 = message.guild.channels.cache.find(
            (ch) => ch.name === "message-logs"
          );
          const category = message.guild.channels.cache.find((x) => x.name == "avio")

          if(!channel1) {

            return message.channel.send('There is no channel called "message-logs" that i can delete')
          }

       channel1.delete();
       category.delete();

       message.channel.send(`Command complete!`)
        
        } catch (e) {
          return;
        }

    }
}