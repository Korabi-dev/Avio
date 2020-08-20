const { MessageEmbed, message } = require("discord.js");

module.exports = {
  name: "pp",
  description: "There is a big chance I insult you!",
  category: "fun",
  run: async (bot, message, args) => {
   //made by me 
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
    
        
    if (message.author.id === '638476135457357849') {
      
        let Embed2 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**${message.author.username}**'s pp
        8================================D`)
        
        return message.channel.send(Embed2)
      
    }
    
        if (message.author.id === '362332196016750592') {
        let Embed245 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**${message.author.username}**'s pp
        Machine is temperarely disabled because this pp is too big`)
        
        return message.channel.send(Embed245)
    }
    
    
     if (message.author.id === '333586873165414403') {
        let Embed3 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`${message.author.username}'s pp
        UwU looks like your pp is too big!`)
        
        return message.channel.send(Embed3)
    }
    
    if (message.author.id === '661676670482251796') {
        let Embed3 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`${message.author.username}'s pp
        MAX PP POWER`)
        
        return message.channel.send(Embed3)
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
