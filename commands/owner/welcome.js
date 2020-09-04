const discord = require("discord.js")
const client = new discord.Client();
const axios = require("axios")

module.exports = {
    name: "welcome",
    category: "owner",
    run: async (client, message, args) => {
        let user = message.mentions.members.first();
        
    const url = `https://api.no-api-key.com/api/v2/welcome?username=${user.username}&text_heading=Welcome%20To%20${message.guild.name}!&user_image=${user.user.displayAvatarURL({ dynamic: true, size: 256 })}`
        
        message.channel.send(url)

    } 
    }
