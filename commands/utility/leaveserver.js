const Discord = require("discord.js");

module.exports = {
  name: "leaveguild",
  description: "leave a server with a guild id (dev only)",
  category: "utility",
  run: async (bot, message, args) => {

if(message.author.id !== '638476135457357849') {
return message.channel.send(`this can only be used by my developer!`)
}

 if(!args[0]){
return message.channel.send(`Hey dear dev mind giving me a server id ?`)
}
    

   message.channel.send('Leaving that server....') 
    
bot.guilds.cache.get(args[0]).leave().catch(() => {
                                    message.channel.send(`BRUH GIMME A VALID ID SMH 😡`)
                            });
                            




}
}
