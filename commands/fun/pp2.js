const { MessageEmbed, message } = require("discord.js");

module.exports = {
  name: "ppmeter",
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
      
    let target =   message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    
          
    if (message.author.id === '638476135457357849') {
      if(!target){
        let Embed23 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**${message.author.username}**'s pp
        8================================D`)
        
        return message.channel.send(Embed23)
      }
    }
    
        if (message.author.id === '362332196016750592') {
          if(!target){
        let Embed245 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**${message.author.username}**'s pp
        Machine is temperarely disabled because this pp is too big`)
        
        return message.channel.send(Embed245)
          }
    }
    
    
     if (message.author.id === '333586873165414403') {
       if(!target){
        let Embed3 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`${message.author.username}'s pp
        UwU looks like your pp is too big!`)
        
        return message.channel.send(Embed3)
       }
    }
    
    if (message.author.id === '661676670482251796') {
      if(!target){
        let Embed3 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`${message.author.username}'s pp
        MAX PP POWER`)
        
        return message.channel.send(Embed3)
      }
    }
    
    
    if (target.id === '638476135457357849') {
     
        let Embed23 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**${message.author.username}**'s pp
        8================================D`)
        
        return message.channel.send(Embed23)
      
    }
    
        if (target.id === '362332196016750592') {
          
        let Embed245 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**${message.author.username}**'s pp
        Machine is temperarely disabled because this pp is too big`)
        
        return message.channel.send(Embed245)
          
    }
    
    
     if (target.id === '333586873165414403') {
       
        let Embed3 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`${message.author.username}'s pp
        UwU looks like your pp is too big!`)
        
        return message.channel.send(Embed3)
       
    }
    
    if (target.id === '661676670482251796') {
      if(!target){
        let Embed3 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`${message.author.username}'s pp
        MAX PP POWER`)
        
        return message.channel.send(Embed3)
      
    }
    
    
    
      
      if(!target){
  let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed2 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**${message.author.username}**'s pp
        ${response} 
        `)
        
        .setColor(`RANDOM`);
      message.channel.send(Embed2);




}
      
    
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**${target.username}**'s pp
        ${response} 
        `)
        
        .setColor(`RANDOM`);
      message.channel.send(Embed);
}}
