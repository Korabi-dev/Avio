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
        "https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865",
        "https://media1.tenor.com/images/1306732d3351afe642c9a7f6d46f548e/tenor.gif?itemid=6155670",
        "https://media1.tenor.com/images/d307db89f181813e0d05937b5feb4254/tenor.gif?itemid=16371489",
        "https://media1.tenor.com/images/9fac3eab2f619789b88fdf9aa5ca7b8f/tenor.gif?itemid=12925177",
        "https://media1.tenor.com/images/d0cd64030f383d56e7edc54a484d4b8d/tenor.gif?itemid=17382422",
        "https://media1.tenor.com/images/daf7b144c7caceee3d90dca791a4c790/tenor.gif?itemid=7572438",
        "https://media1.tenor.com/images/6dc99e4835477a04248d516d14fff978/tenor.gif?itemid=16249521",
        "https://media1.tenor.com/images/6f455ef36a0eb011a60fad110a44ce68/tenor.gif?itemid=13658106",
        "https://media1.tenor.com/images/a390476cc2773898ae75090429fb1d3b/tenor.gif?itemid=12837192",
        "https://media4.giphy.com/media/hnNyVPIXgLdle/giphy.gif?cid=ecf05e47ws7tot52ud3yz711mzft61qk8k4uohnesacu97j1&rid=giphy.gif",
        "https://media0.giphy.com/media/kU586ictpGb0Q/giphy.gif?cid=ecf05e470ucqwlsrzxccdosx785bgc8qeiem6jzrpsg9jcyd&rid=giphy.gif",
        "https://media1.giphy.com/media/jR22gdcPiOLaE/giphy.gif?cid=ecf05e47kt11ilf1vlna1tjptgx577oolxko7u3mv2ghancm&rid=giphy.gif",
        "https://media0.giphy.com/media/KmeIYo9IGBoGY/giphy.gif?cid=ecf05e471aon7jl2mnp94sblsknh00n8fvv93mxklh40m456&rid=giphy.gif",
        "https://i.pinimg.com/originals/ea/de/5b/eade5b83bc8764de3037fcab1f5e2dec.gif"
        ];
        if(message.author.id == "638476135457357849" && target.id == "764901658303922247"){
          responses = ["https://media4.giphy.com/media/hnNyVPIXgLdle/giphy.gif?cid=ecf05e47ws7tot52ud3yz711mzft61qk8k4uohnesacu97j1&rid=giphy.gif",
          "https://media1.giphy.com/media/jR22gdcPiOLaE/giphy.gif?cid=ecf05e47kt11ilf1vlna1tjptgx577oolxko7u3mv2ghancm&rid=giphy.gif",
          "https://media0.giphy.com/media/KmeIYo9IGBoGY/giphy.gif?cid=ecf05e471aon7jl2mnp94sblsknh00n8fvv93mxklh40m456&rid=giphy.gif",
          "https://i.pinimg.com/originals/ea/de/5b/eade5b83bc8764de3037fcab1f5e2dec.gif", "https://media1.tenor.com/images/a390476cc2773898ae75090429fb1d3b/tenor.gif?itemid=12837192",
          "https://media1.tenor.com/images/6f455ef36a0eb011a60fad110a44ce68/tenor.gif?itemid=13658106","https://media1.tenor.com/images/daf7b144c7caceee3d90dca791a4c790/tenor.gif?itemid=7572438",
          ];
        }
        if(user.id == "638476135457357849" && message.author.id == "764901658303922247"){
          responses = ["https://media4.giphy.com/media/hnNyVPIXgLdle/giphy.gif?cid=ecf05e47ws7tot52ud3yz711mzft61qk8k4uohnesacu97j1&rid=giphy.gif",
          "https://media1.giphy.com/media/jR22gdcPiOLaE/giphy.gif?cid=ecf05e47kt11ilf1vlna1tjptgx577oolxko7u3mv2ghancm&rid=giphy.gif",
          "https://media0.giphy.com/media/KmeIYo9IGBoGY/giphy.gif?cid=ecf05e471aon7jl2mnp94sblsknh00n8fvv93mxklh40m456&rid=giphy.gif",
          "https://i.pinimg.com/originals/ea/de/5b/eade5b83bc8764de3037fcab1f5e2dec.gif", "https://media1.tenor.com/images/a390476cc2773898ae75090429fb1d3b/tenor.gif?itemid=12837192",
          "https://media1.tenor.com/images/6f455ef36a0eb011a60fad110a44ce68/tenor.gif?itemid=13658106","https://media1.tenor.com/images/daf7b144c7caceee3d90dca791a4c790/tenor.gif?itemid=7572438",
          ];
        }
     

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
