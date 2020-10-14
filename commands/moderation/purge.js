const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "purge",
    category: "moderation",
    run: async(bot, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`).then(m => m.delete({timeout: 5000}))
        }
        if(args[0]){
            return message.channel.send("pleasegive me an amount.")
        }

        if (isNaN(args[0][0])) {
            return message.channel.send(`Please provide a number!`).then(m => m.delete({timeout: 5000}))
        }

        if (args[0] > 100) {
            return message.channel.send(`Max amount of messages you can delete is 100`).then(m => m.delete({timeout: 5000}))
        }

      
        let deleteAmount  = (args[0]);
        
        message.delete();
        try {
        
         message.channel.bulkDelete(deleteAmount, true);
        } catch (e) {
            return message.channel.send(`I can only delete messages that are not over 14 days old!`)
        }
    }
  
}
