const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports = {
    name: "t",
    aliases: ["talk", "speak", "s"],
    category: "extra",
    desription: "Talk to me :p",
    run: async (bot, message, args) => {
    
          if(!args[0]){
return message.channel.send(`Please provide some text!`)
}
        if(args[0] === 'korabi'){
return message.channel .send(`my developer is korabi yay what about him?`)
}
        
    
    
        const url = `https://some-random-api.ml/chatbot?message=${args.slice(0).join("%20")}`;

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
