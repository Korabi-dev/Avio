const Discord = require("discord.js");


const client = new Discord.Client();

module.exports = {
  name: "listofguilds-korabi20",
  description: "A role utility command",
  category: "utility",
  run: async (bot, message, args) => {
  
  if(message.author.id !== '638476135457357849') return;
  
  
  const servers = client.guilds.cache.map(m => ` ${m.name} - ${m.id} `)
  
  message.channel.send(`sent you a list of all the servers im in.`)
  
  message.member.send(servers)
  
  }
  }
