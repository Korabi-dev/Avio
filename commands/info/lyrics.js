const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "lyrics",
    aliases: ["l"],
    category: "info",
    run: async (bot, message, args) => {
    
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
        const lyrics = `${data.lyrics}`;

        for(let i = 0; i < lyrics.length; i += 2000) {
            const lyricss = lyrics.substring(i, Math.min(lyrics.length, i + 2000));
           
        const embed = new MessageEmbed()
        .setTitle('Lyrics:')
        .setDescription(`${lyricss}`)
        .setColor("GREEN")
        
        
    return await message.channel.send(embed)
        }
        const embed = new MessageEmbed()
        .setTitle('Lyrics:')
        .setDescription(`${lyrics}`)
        .setColor("GREEN")
        
        
    return await message.channel.send(embed)



    }
}
