const warns = require("../../models/warns");
const Discord = require('discord.js')
module.exports = {
  name: "refresh",
  description: "refresh",
  category: "moderation",
  usage: "too lazy,
  run: async (bot, message, args) => {
   if(message.author.id !== '638476135457357849') return message.channel.send('You do not have premissions to use this command and you have been  warned')
   
   message.channel.send('Refreshing wait 5-10 seconds!')
  }
}
