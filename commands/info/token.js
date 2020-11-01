const { MessageEmbed } = require('discord.js');
const axios = require('axios');


module.exports = {
    name: "token",
    aliases: ["bottoken"],
    description: "send the bots token",
    category: "info",
    run: async (bot, message, args) => {
    
  
    
    
        const url = `https://some-random-api.ml/bottoken`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return console.log(e)
        }
        const embed = new MessageEmbed()
        .setTitle("Token Recived!")
        .setDescription(`${data.token}`)
        .setFooter("this token was randomly generated and is not valid. check out the api used [here](https://some-random-api.ml/bottoken)")
        .setTimestamp()
        .setColor("RED")
        return await ctx(embed)
        }
}
