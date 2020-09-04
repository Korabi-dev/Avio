const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "kiss",
  description: "kiss someone :wink:",
  category: "fun",
  run: async (bot, message, args) => {
    let target = message.mentions.members.first();
    if (!target){
        return message.channel.send('Please mention someone to kiss :wink:')
     }
     if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, How would you even do that please elaborate.`)
     }
      let responses = [
        "https://media1.tenor.com/images/13cfb22a2e5ed92b6049131647a27306/tenor.gif?itemid=13546620",
        "https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865",
        "https://media1.tenor.com/images/1306732d3351afe642c9a7f6d46f548e/tenor.gif?itemid=6155670",
        "https://media1.tenor.com/images/d307db89f181813e0d05937b5feb4254/tenor.gif?itemid=16371489",
        "https://media1.tenor.com/images/9fac3eab2f619789b88fdf9aa5ca7b8f/tenor.gif?itemid=12925177",
        "https://media1.tenor.com/images/d0cd64030f383d56e7edc54a484d4b8d/tenor.gif?itemid=17382422",
        "https://media1.tenor.com/images/daf7b144c7caceee3d90dca791a4c790/tenor.gif?itemid=7572438",
        "https://media1.tenor.com/images/21520a115cfa99761d44cb6827d13909/tenor.gif?itemid=16585116",
        "https://media1.tenor.com/images/3dc3bb6e35aa0d090527babe698bfe55/tenor.gif?itemid=14698608",
        "https://media1.tenor.com/images/598ff2220c5673cdb24e373d7faedf27/tenor.gif?itemid=16715972",
        "https://media1.tenor.com/images/6dc99e4835477a04248d516d14fff978/tenor.gif?itemid=16249521",
        ];

     

      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`KISSED`)
        .setDescription(`Awwww how cute **${message.author}** kisses **${target} looks like we have a new couple ;)**`)
        .setImage(`${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);

      
    }
  
};
