const axios = require('axios');
const { MessageEmbed, Message, Client } = require("discord.js");
const discord = require("discord.js");


module.exports = async (bot, message, member) => {
    console.log(member)
        
    const url = `https://api.no-api-key.com/api/v2/welcome?username=${member.user.username}&text_heading=Welcome%20to%20${member.guild.name}&user_image=${member.user.displayAvatarURL({ format: "png" })}`
        
    
        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`Error (${e}) please report this to the dev`)
        }

        let channel = member.guild.channels.cache.find(
            (ch) => ch.name === "welcome"
          );

            if(!channel) {
                return;
            }

            channel.send(url)

    }
