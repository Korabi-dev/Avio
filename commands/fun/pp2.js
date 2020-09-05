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
    
          
 
    
    if(message.author.id === '707676620390924364') {
      let Embed3 = new MessageEmbed()
      .setTitle(`PP MACHINE`)
      .setDescription(`**${message.author.username}**'s pp
      NO PP HERE ALL THE ACTION YOU MUST HAVE IS PRETENDING TO MAKE BABIES WITH YOUR PILLOW
      `)
      
      .setColor(`RANDOM`);
      return message.channel.send(Embed3)
    }
    
    if(target.id === '707676620390924364') {
      let Embed4 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**${target.user.username}**'s pp
        NO PP HERE ALL THE ACTION THIS GUY MUST HAVE IS PRETENDING TO MAKE BABIES WITH HIS PILLOW
        `)
        
        .setColor(`RANDOM`);
     return  message.channel.send(Embed4);
    }
  

    if(message.author.id === '325558938005143562') {
      let Embed5 = new MessageEmbed()
      .setTitle(`PUSSY MACHINE`)
      .setDescription(`**${message.author.username}**'s pussy
        DANG THIS PUSSY IS SO TIGHT LIKE AN ANIME ONE
      `)
      
      .setColor(`RANDOM`);
      return message.channel.send(Embed5)
    }
    
    if(target.id === '325558938005143562') {
      let embed6 = new MessageEmbed()
        .setTitle(`PUSSY MACHINE`)
        .setDescription(`**${target.user.username}**'s pussy
        DANG THIS PUSSY IS SO TIGHT LIKE AN ANIME ONE
        `)
        
        .setColor(`RANDOM`);
     return  message.channel.send(embed6);
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
