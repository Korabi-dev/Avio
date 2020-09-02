const axios = require('axios');
const { MessageEmbed, Message, Client } = require("discord.js");
const discord = require("discord.js");


module.exports = async (bot, message, user) => {
    console.log(user)
        
    const url = `https://api.no-api-key.com/api/v2/welcome?username=${user.username}&text_heading=Welcome%20To%20The%20Server!&user_image=${user.user.displayAvatarURL({ format: "png" })}`
        
    
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
