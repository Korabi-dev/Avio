const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "purge",
    category: "moderation",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`).then(m => m.delete({timeout: 5000}))
        }

        if (isNaN(args[0][0])) {
            return message.channel.send(`Please provide a number!`).then(m => m.delete({timeout: 5000}))
        }

        if (args[0] > 100) {
            return message.channel.send(`Max amount of messages you can delete is 100`).then(m => m.delete({timeout: 5000}))
        }

      
        let deleteAmount  = (args[0]);

         message.channel.bulkDelete(deleteAmount, true);
         console.log(`${message.author.username} Deleted ${deleteAmount} messages!`)
        const embed = new MessageEmbed()
            .setTitle(`PURGED`)
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`Successfully Deleted ${deleteAmount} Messages!`)
            .setFooter(message.author.username, message.author.displayAvatarURL())
            .setColor('RANDOM')
         message.channel.send(embed)
    }
  
}