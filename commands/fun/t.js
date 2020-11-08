const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "dcmd",
    category: "extra",
    owneronly: true,
    desription: "Talk to me :p",
    run: async (bot, message, args) => {
    
       
    
    
        const url = `https://some-random-api.ml/chatbot?message=${message.content}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.reply(`Idk`)
        }

            
        await message.reply(data.response)
    }
}
