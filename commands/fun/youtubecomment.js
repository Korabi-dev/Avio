const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "youtube",
    aliases: ["yt"],
    category: "extra",
    run: async (client, message, args) => {
    
          if(!args[0]){
return message.channel.send(`Please provide the comment!`)
}
 
        let target = message.mentions.members.first();

        const memberurl = `https://some-random-api.ml/canvas/youtube-comment?avatar=${message.author.displayAvatarURL()}&comment=${args.slice(0).join("%20")}&username=${message.author.username}`;


        const url = `https://some-random-api.ml/canvas/youtube-comment?avatar=${target.user.displayAvatarURL({ })}&comment=${args.slice(0).join("%20")}&username=${user.username}`;

      
        if(!target) {
            return  message.channel.send(memberurl)

        }

            
        await message.channel.send(url)
        

      

    }
}
