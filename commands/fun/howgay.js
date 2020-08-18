const discord = require("discord.js");

module.exports = {
  name: "howgay",
  aliases: ["gaymeter", "gayscore", "gay"],
  category: "fun",
  description: "measure your love!",
  usage: "ship <@user>",
  run: (client, message, args) => {

let target = message.mentions.members.first();



    
let response = Math.floor(`${Math.random() * 100}`) + 1;


if(!target) {

  let embed2 = new discord.MessageEmbed()
  .setTitle('Gay Rate Machine')
  .setDescription(`You are ${response}% gay :gay_pride_flag: `)
  .setColor('RANDOM')
  
  
  return message.channel.send(embed2)

}

  let embed = new discord.MessageEmbed()
  .setTitle('Gay Rate Machine')
  .setDescription(`${target.user.username} is ${response}% gay :gay_pride_flag: `)
  .setColor('RANDOM')
  
  
  message.channel.send(embed)
  
  }
}

