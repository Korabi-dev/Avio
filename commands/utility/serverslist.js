const Discord = require("discord.js");




module.exports = {
  name: "guildslist",
  description: "A role utility command",
  category: "utility",
  run: async (bot, message, args) => {
  
  if(message.author.id !== '638476135457357849') return;
  
  
  const servers = bot.guilds.cache.map(m => ` Name: ${m.name} ID: ${m.id} Owner: ${m.owner.user.username} Owner id: ${m.owner.user.id}`)
  
  
  
console.log(servers)
    message.channel.send(`Logged the servers in the console!`)
  
  }
  }
