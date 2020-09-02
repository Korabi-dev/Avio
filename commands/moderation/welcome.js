const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "welcome",
    aliases: ["hello"],
    category: "extra",
    run: async (client, message, args) => {
    
        
        
        const user = message.mentions.members.first();
    
        if(!user){

            return message.channel.send('Please provide a member')
        }
    
        const url = `https://api.no-api-key.com/api/v2/welcome?username=${user.user.username}&text_heading=Welcome to ${message.guild.name}&user_image=${user.user.displayAvatarURL({ format: "png" })}`;

        try {
            const embed = new MessageEmbed()
              .setImage(url)
            await message.channel.send(embed)
        } catch (e) {
            return message.channel.send(`Error (${e}) please report this to the dev`)
        }

    }
}