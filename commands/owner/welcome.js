const discord = require("discord.js")
const client = new discord.Client();

module.exports = {
    name: "welcome",
    category: "owner",
    run: async (client, message, args) => {
        let user = message.mentions.members.first();
        
    const url = `https://api.no-api-key.com/api/v2/welcome?username=${user.username}&text_heading=Welcome%20To%20${message.guild.name}!&user_image=${user.displayAvatarURL({ format: "png" })}`
        
    
        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`Error (${e}) please report this to the dev`)
        }

    

           message.channel.send(url)

    } 
    }
