const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "slap",
  description: "GIMME THAT SMUSHED HEAD OF YOURS",
  category: "fun",
  run: async (bot, message, args) => {
    let target = message.mentions.members.first();
    if (!target){
        return message.channel.send('Please mention someone who you want to slap!')
     }
     if(target.id === message.author.id) {
      return message.channel.send(`LOL why would you slap yourself smh!`)
     }
      let responses = [
        "https://media.tenor.com/images/53b846f3cc11c7c5fe358fc6d458901d/tenor.gif",
        "https://media.tenor.com/images/1d8edce282f3e36abc6b730357d3cea2/tenor.gif",
        "https://media.tenor.com/images/45a27dba6f60c6a8deee02335dd5f1a0/tenor.gif",
        "https://media.tenor.com/images/b09b36ae92b2b5c6da7212472514063d/tenor.gif",
        "https://media.tenor.com/images/a14be99841c909a43d24b220ffebaa37/tenor.gif",
        "",
        "",
        ];

   

      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`SLAP`)
        .setDescription(`OOF ${message.author} just slapped ${target} ouch that looks like it hurts...`)
        .setImage(response { dynamic: true, size: 256 })
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  
};
