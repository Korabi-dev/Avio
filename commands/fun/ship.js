const discord = require("discord.js");

module.exports = {
  name: "ship",
  aliases: ["lovemeter", "howmuchdoilove"],
  category: "fun",
  description: "measure your love!",
  usage: "ship <@user>",
  run: (client, message, args) => {

let target = message.mentions.members.first();

if(!target) {

return message.channel.send(`**${message.author.username}**, I know you love yourself but Please mention someone else!`)

}

if(message.author.id === '325558938005143562'){
  if(target.id === '707676620390924364') {
    let embed2 = new discord.MessageEmbed()
    .setTitle('LOVE')
    .setDescription(`${message.author} is 100% in love with ${target} GET MARRIED CMON`)
    .setImage('https://media1.tenor.com/images/53531b7811058448306f67e0934a6aa2/tenor.gif?itemid=3555133')
    .setColor('RED')


    return message.channel.send(embed2)
  }
}
if(message.author.id === '707676620390924364'){
  if(target.id === '325558938005143562') {
    let embed1 = new discord.MessageEmbed()
    .setTitle('LOVE')
    .setDescription(`${message.author} is Simp% in love with ${target}`)
    .setImage('https://media1.tenor.com/images/53531b7811058448306f67e0934a6aa2/tenor.gif?itemid=3555133')
    .setColor('RED')

    return message.channel.send(embed1)

  }
}

    
let response = Math.floor(`${Math.random() * 100}`) + 1;

  let embed = new discord.MessageEmbed()
  .setTitle('LOVE')
  .setDescription(`${message.author} is ${response}% in love with ${target}`)
  .setImage('https://media1.tenor.com/images/53531b7811058448306f67e0934a6aa2/tenor.gif?itemid=3555133')
  .setColor('RED')
  
  
  return message.channel.send(embed)
  





}
}
