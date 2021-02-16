const discord = require("discord.js");

module.exports = {
  name: "ship",
  aliases: ["lovemeter", "howmuchdoilove"],
  category: "fun",
  description: "measure your love with someone!",
  usage: "ship <@user>",
  run: (bot, message, args) => {

let target = message.mentions.members.first();

if(!target) {

return message.channel.send(`**${message.author.username}**, I know you love yourself but Please mention someone else!`)

}

if(message.author.id === '638476135457357849'){
  if(target.id === '764901658303922247') {
    let embed2 = new discord.MessageEmbed()
    .setTitle('LOVE')
    .setDescription(`${message.author} is inf% in love with ${target}, how adorable <3`)
    .setImage('https://media1.tenor.com/images/53531b7811058448306f67e0934a6aa2/tenor.gif?itemid=3555133')
    .setColor('RED')


    return message.channel.send(embed2)
  }
}
if(message.author.id === '764901658303922247'){
  if(target.id === '638476135457357849') {
    let embed1 = new discord.MessageEmbed()
    .setTitle('LOVE')
    .setDescription(`${message.author} is inf% in love with ${target}, how adorable <3`)
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
