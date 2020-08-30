const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "decode",
    category: "extra",
    run: async (client, message, args) => {
        const url = `http://some-random-api.ml/binary?decode=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`error (-1) please report this to the dev!`)
        }

        const embed = new MessageEmbed()
            .setTitle('Decode Binary')
            .setDescription(data.text)
            .setColor("GREEN")
            
        await message.channel.send(embed)
    }
}
