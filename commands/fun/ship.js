const discord = require("discord.js");

module.exports = {
  name: "ship",
  category: "fun",
  description: "measure your love!",
  usage: "ship <@user>",
  run: (client, message, args) => {

let target = message.mentions.members.first();

if(!target) {

return message.channel.send(`**${message.author.username}**, I know you love yourself but Please mention someone else!`)

}
    if(target.id === '638476135457357849'){
    if(message.author.id !== '333586873165414403') {
let embed = new discord.MessageEmbed()
  .setTitle('LOVE')
  .setDescription(`${message.author} is 0% in love with ${target}`)
  .setImage('https://media1.tenor.com/images/53531b7811058448306f67e0934a6aa2/tenor.gif?itemid=3555133')
  .setColor('RED')
  
  
  return message.channel.send(embed)

}

}
    
    
     if(target.id === '638476135457357849'){
    if(message.author.id === '333586873165414403') {
let embed2 = new discord.MessageEmbed()
  .setTitle('LOVE')
  .setDescription(`${message.author} is 10000% in love with ${target}`)
  .setImage('https://media1.tenor.com/images/53531b7811058448306f67e0934a6aa2/tenor.gif?itemid=3555133')
  .setColor('RED')
  
  
  return message.channel.send(embed2)

}

}
    
 
 

    if(target.id === '333586873165414403'){
    if(message.author.id !== '638476135457357849') {
let embed = new discord.MessageEmbed()
  .setTitle('LOVE')
  .setDescription(`${message.author} is 0% in love with ${target}`)
  .setImage('https://media1.tenor.com/images/53531b7811058448306f67e0934a6aa2/tenor.gif?itemid=3555133')
  .setColor('RED')
  
  
  return message.channel.send(embed)

}

}
 
    
    
        if(target.id === '333586873165414403'){
    if(message.author.id === '638476135457357849') {
let embed2 = new discord.MessageEmbed()
  .setTitle('LOVE')
  .setDescription(`${message.author} is 10000% in love with ${target}`)
  .setImage('https://media1.tenor.com/images/53531b7811058448306f67e0934a6aa2/tenor.gif?itemid=3555133')
  .setColor('RED')
  
  
  return message.channel.send(embed2)

}

}
    
let response = Math.floor(`${Math.random() * 100}`) + 1;

  let embed = new discord.MessageEmbed()
  .setTitle('LOVE')
  .setDescription(`${message.author} is ${response}% in love with ${target}`)
  .setImage('https://media1.tenor.com/images/53531b7811058448306f67e0934a6aa2/tenor.gif?itemid=3555133')
  .setColor('RED')
  
  
  message.channel.send(embed)
  





}
}
