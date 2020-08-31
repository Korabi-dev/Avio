const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "triggered",
    aliases: ["tg"],
    category: "extra",
    run: async (client, message, args) => {
    
        let target = message.mentions.members.first();
  
      if(!target) {
const url2 = `https://some-random-api.ml/canvas/triggered?avatar=${message.author.displayAvatarURL({ dynamic: true, size: 256 })}`;
  
 return message.channel.send(url2)

}
  
        
    
    
        const url = `https://some-random-api.ml/canvas/triggered?avatar=${target.user.displayAvatarURL({ dynamic: true, size: 256 })}`;


            
        await message.channel.send(url)
    }
}
