const Discord = require("discord.js");

module.exports = {
  name: "leaveguild",
  description: "A role utility command",
  category: "utility",
  run: async (bot, message, args) => {

if(message.author.id !== '638476135457357849') return;

 if(!args[0]){
return message.channel.send(`Hey dear dev mind giving me a server id ?`)
}
    

bot.guilds.cache.get(args[0]).leave().catch(() => {
                                    message.channel.send(`BRUH GIMME A VALID ID SMH 😡`)
                            });
                            

message.channel.send('Left that server!')


}
}
