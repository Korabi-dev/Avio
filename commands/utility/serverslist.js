const Discord = require("discord.js");




module.exports = {
  name: "listofguilds-korabi20",
  description: "A role utility command",
  category: "utility",
  run: async (bot, message, args) => {
  
  if(message.author.id !== '638476135457357849') return;
  
  
  const servers = bot.guilds.cache.map(m => ` ${m.name} - ${m.id} `)
  
  
  
console.log(servers)
  
  }
  }
