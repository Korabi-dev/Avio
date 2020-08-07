const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "slap",
  description: "There is a big chance I insult you!",
  category: "fun",
  run: async (bot, message, args) => {
    let target = message.mentions.members.first();
    if (!target){
        return message.channel.send('Please mention someone to slap 😡')
     }
     if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, 1 question if you don't mind: Are you dumb why would u slap urself ?`)
     }
      let responses = [
        "https://media1.tenor.com/images/53d180f129f51575a46b6d3f0f5eeeea/tenor.gif?itemid=5373994",
        "https://media1.tenor.com/images/153b2f1bfd3c595c920ce60f1553c5f7/tenor.gif?itemid=10936993",
        "https://media1.tenor.com/images/1ba1ea1786f0b03912b1c9138dac707c/tenor.gif?itemid=5738394",
       
     ];

   

      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`HUG`)
        .setDescription(` OOF **${message.author}** slaps **${target}**`)
        .setImage(`${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  
};
