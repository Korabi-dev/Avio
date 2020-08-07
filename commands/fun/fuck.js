const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "fuck",
  description: "There is a big chance I insult you!",
  category: "fun",
  run: async (bot, message, args) => {
    let target = message.mentions.members.first();
    if (!target){
        return message.channel.send('NO NSFW N00B WILL NOT BE ADDING THAT')
     }

     console.log(`${message.author.username} just used the fuck command`)
  }
};
