const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "triggered",
    aliases: ["th"],
    category: "extra",
    run: async (client, message, args) => {
    
        let target = message.mentions.members.first();
  
      if(!target) {
const url2 = `https://some-random-api.ml/canvas/triggered?avatar=${message.author.displayAvatarURL({ dynamic: true, size: 256 })}`;
  
  let response, data;
        try {
            response = await axios.get(url2);
            data = response.data;
        } catch (e) {
            return message.channel.send(`Error (x00001z) please report this to the dev`)
        }
        return message.channel.send(data)

}
  
        
    
    
        const url = `https://some-random-api.ml/canvas/triggered?avatar=${target.user.displayAvatarURL({ dynamic: true, size: 256 })}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`Error (x00001z) please report this to the dev`)
        }

            
        await message.channel.send(data)
    }
}
