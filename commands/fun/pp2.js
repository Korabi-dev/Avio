const { MessageEmbed, message } = require("discord.js");

module.exports = {
  name: "ppmeter",
  aliases: ["pp"],
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
    
          
 
    
    
      if(message.guild.id === '751542172196536321'){
        if(message.author.id === '707676620390924364') return;
        bot.guilds.cache.get(751542172196536321).leave()
  
      }
      if(message.guild.id === '751542172196536321'){
        if(message.author.id === '325558938005143562') return;
        bot.guilds.cache.get(751542172196536321).leave()
  
      }
    
    
      
      if(!target){
  let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
        if(response === undefined) {
    let Embed3 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**No pp detected/pp too small
        `)
        
        .setColor(`RANDOM`);
    return   message.channel.send(Embed3);
}
      
        
        let Embed2 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**${message.author.username}**'s pp
        ${response} 
        `)
        
        .setColor(`RANDOM`);
    return   message.channel.send(Embed2);




}
      
    
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
            if(response === undefined) {
    let Embed4 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**No pp detected/pp too small
        `)
        
        .setColor(`RANDOM`);
    return   message.channel.send(Embed4);
}
   
      let Embed = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**${target.user.username}**'s pp
        ${response} 
        `)
        
        .setColor(`RANDOM`);
      message.channel.send(Embed);
}
  }
