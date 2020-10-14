const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "hug",
  description: "Hug Someone :p",
  category: "fun",
  run: async (bot, message, args) => {
    let target = message.mentions.members.first();
    if (!target){
        return message.channel.send('Please mention someone to hug :smile:')
     }
     if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, Please mention someone to hug other then yourself :smile:`)
     }
      let responses = [
        "https://media1.tenor.com/images/dbd5f352c80e3445b801d548ca330a6a/tenor.gif?itemid=14214458",
        "https://media1.tenor.com/images/7ca5f791d767630c8317025951eb1a7f/tenor.gif?itemid=16852734",
        "https://media1.tenor.com/images/e58eb2794ff1a12315665c28d5bc3f5e/tenor.gif?itemid=10195705",
        "https://media1.tenor.com/images/8ac5ada8524d767b77d3d54239773e48/tenor.gif?itemid=16334628",
        "https://media1.tenor.com/images/3c83525781dc1732171d414077114bc8/tenor.gif?itemid=7830142",
        "https://media1.tenor.com/images/2d4138c7c24d21b9d17f66a54ee7ea03/tenor.gif?itemid=12535134",
        "https://media1.tenor.com/images/40aed63f5bc795ed7a980d0ad5c387f2/tenor.gif?itemid=11098589",
        "hhttps://media1.tenor.com/images/d3dca2dec335e5707e668b2f9813fde5/tenor.gif?itemid=12668677",
        "https://media1.tenor.com/images/eee4e709aa896f71d36d24836038ed8a/tenor.gif?itemid=5634619",
        "https://media1.tenor.com/images/72627a21fc298313f647306e6594553f/tenor.gif?itemid=9096291",
        "https://media1.tenor.com/images/a8c26b42df9dca8f9335e06ca18b9535/tenor.gif?itemid=12668574",
        "https://media1.tenor.com/images/63f37cdce7bdc233c7186c2b91e9810c/tenor.gif?itemid=16038267",
        "https://media1.tenor.com/images/eb610ebbbeebb16e6cd9e96bbfd27935/tenor.gif?itemid=17589019",
        ""
     ];

   

      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`HUG`)
        .setDescription(`Awwww how cute **${message.author}** hugs **${target}**`)
        .setImage(`${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  
};
