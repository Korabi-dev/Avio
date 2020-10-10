const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "encode",
    category: "extra",
    run: async(bot, message, args) => {
        const url = `https://some-random-api.ml/binary?text=${args.slice(0).join("%20")}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`error (-1) please report this to the dev!`)
        }

        const embed = new MessageEmbed()
            .setTitle('Encode Binary')
            .setDescription(data.binary)
            .setColor("GREEN")
            
        await message.channel.send(embed)
    }
}
