const discord = require('discord.js')
module.exports = {
    name: "embedify",
    description: "Get the bot to say what ever you want! embeded",
    usage: "<msg>",
    run: async (bot, message, args) => {
      
        let text = `${args.join(" ")}`
        
        
      if(!text){
return message.channel.send(`Oops,You forgot to mention some text  for the embed!`)
}
        

        
        
    let embed = new discord.MessageEmbed()
    .setTitle(`${text}`)
    .setColor("RANDOM")
   
    message.delete();
    message.channel.send(embed)
    },
  };
