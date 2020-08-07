const { MessageEmbed, message } = require("discord.js");

module.exports = {
  name: "pp",
  description: "There is a big chance I insult you!",
  category: "fun",
  run: async (bot, message, args) => {
    
     let responses = [
        "8D",
        "8=D",
        "8==D",
        "8===D",
        "8====D",
        "8=====D",
        "8======D",
        "8=======D",
        "8========D",
        "8=========D",
        "8==========D"
      ];
     let user;
        if (message.mentions.users.first()) {
          user = message.mentions.users.first();
        } else {
            user = message.author;
        }
        const member = message.guild.member(user);
    
        
    if (message.author.id !== '638476135457357849') {
        let Embed2 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**Korabi20**'s pp
        8================================D`)
        
        return message.channel.send(Embed2)
    }
    
    
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**${user.username}**'s pp
        ${response} 
        `)
        
        .setColor(`RANDOM`);
      message.channel.send(Embed);
}}
