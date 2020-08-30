const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "lyrics",
    aliases: ["l"],
    category: "extra",
    run: async (client, message, args) => {
    
          if(!args[0]){
return message.channel.send(`Please provide a song name!`)
}
    
    
        const url = `https://some-random-api.ml/lyrics?title=${args.slice(0).join(" ")}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`No song with the name "${args[0]}" was found!`)
        }

        const embed = new MessageEmbed()
            .setTitle('Decode Binary')
            .setDescription(`Artist : ${data.author}
            Title : ${data.title}
            lyrics: ${data.Lyrics}

`)
            .setColor("GREEN")
            
            
        await message.channel.send(embed)
    }
}
