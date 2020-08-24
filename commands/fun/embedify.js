const discord = require('discord.js')
module.exports = {
    name: "embedify",
    description: "Get the bot to say what ever you want! embeded",
    usage: "<msg>",
    run: async (bot, message, args) => {
      
      if(!args[0]){
return message.channel.send(`Oops,You forgot to mention a title for the embed!`)
}
        
       if(!args[1]) {
return message.channel.send(`Oops,You forgot to mention a description for the embed!`)
}
        
      if(!args[2]){
          return message.channel.send(`Oops,You forgot to mention a footer for the embed!`)
}  
        
        
    let embed = new discord.MessageEmbed()
    .setTitle(args[0])
    .setDescription(args[1])
    .setFooter(args[2])
    .setColor("RANDOM")
   
    message.delete();
    message.channel.send(embed)
    },
  };
