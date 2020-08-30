const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "talk",
    aliases: ["t"],
    category: "extra",
    run: async (client, message, args) => {
    
          if(!args[0]){
return message.channel.send(`Please provide some text!`)
}
    
    
        const url = `https://some-random-api.ml/chatbot?message=${args.slice(0).join(" ")}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`Error (x0000z) please report this to the dev`)
        }

            
        await message.channel.send(data.response)
    }
}
