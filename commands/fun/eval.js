const { MessageEmbed, Discord } = require("discord.js");


module.exports = {
  name: "meme",
  description: "Get a meme!",
  category: "fun",
  run: async (bot, message, args) => {
  
  
  if(message.author.id !== '638476135457357849'){
  let Embed = new MessageEmbed()
        .setTitle(`This Command Is Developer Only!`)
        .setColor(`RED`);
   return message.channel.send(Embed);
}
  
  
  if(!args[0]){
return message.channel.send(`Hey dear owner you have forgotten to give me some code to execute!`)
}
  
    let Embed = new MessageEmbed()
        .setTitle(`EVAL`)
        .setDescription(`Code:
        args[0]
`)
        .setImage(target.user.displayAvatarURL({ dynamic: true, size: 256 }))
        .setColor(`RED`);
      message.channel.send(Embed);
  }
}
