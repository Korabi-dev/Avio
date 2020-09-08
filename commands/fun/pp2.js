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
    
          
 
    
    if(message.author.id === '638476135457357849') {
      let Embed3 = new MessageEmbed()
      .setTitle(`PP MACHINE`)
      .setDescription(`**${message.author.username}**'s pp
      Machine broke this pp is too big!
      `)
      
      .setColor(`RANDOM`);
      return message.channel.send(Embed3)
    }
    
    if(target.id === '638476135457357849') {
      let Embed4 = new MessageEmbed()
        .setTitle(`PP MACHINE`)
        .setDescription(`**${target.user.username}**'s pp
        Machine broke this pp is too big!
        `)
        
        .setColor(`RANDOM`);
     return  message.channel.send(Embed4);
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
