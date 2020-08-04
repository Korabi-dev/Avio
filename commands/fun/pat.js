const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "hug",
  description: "There is a big chance I insult you!",
  category: "fun",
  run: async (bot, message, args) => {
    let target = message.mentions.members.first();
    if (!target){
        return message.channel.send('Please mention someone to pat :wink:')
     }
     if(target.id === message.author.id) {
      return message.channel.send(`**${message.author.username}**, Pats themselves :smile:`)
     }
      let responses = [
        "https://media1.tenor.com/images/b37704c48cf5c5e1f0e4348cd73ef056/tenor.gif?itemid=15693493",
        "https://media1.tenor.com/images/da8f0e8dd1a7f7db5298bda9cc648a9a/tenor.gif?itemid=12018819",
        "https://media1.tenor.com/images/c0bcaeaa785a6bdf1fae82ecac65d0cc/tenor.gif?itemid=7453915",
        "https://media1.tenor.com/images/116fe7ede5b7976920fac3bf8067d42b/tenor.gif?itemid=9200932",
        "https://media1.tenor.com/images/282cc80907f0fe82d9ae1f55f1a87c03/tenor.gif?itemid=12018857",
        "https://media1.tenor.com/images/e01e09d8e27c7247314b3dd611f47007/tenor.gif?itemid=13912621",
        "https://media1.tenor.com/images/40aed63f5bc795ed7a980d0ad5c387f2/tenor.gif?itemid=11098589",
        "hhttps://media1.tenor.com/images/d3dca2dec335e5707e668b2f9813fde5/tenor.gif?itemid=12668677",
        "https://media1.tenor.com/images/f48ffb8cf033d1aefe4693045aedad5a/tenor.gif?itemid=4086973",
        ];

   

      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`PAT`)
        .setDescription(`Awwww how cute **${message.author}** pats **${target}** UwU`)
        .setImage(`${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  
};
