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
    
    
    
let response = Math.floor(`${Math.random() * 100}`) + 1;

  let embed = new discord.MessageEmbed()
  .setTitle('LOVE')
  .setDescription(`${message.author} is ${response}% in love with ${target}`)
  .setImage('https://media1.tenor.com/images/53531b7811058448306f67e0934a6aa2/tenor.gif?itemid=3555133')
  .setColor('RED')
  
  
  message.channel.send(embed)
  





}
}
