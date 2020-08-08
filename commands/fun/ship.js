const discord = require("discord.js");

module.exports = {
  name: "ship",
  category: "fun",
  description: "measure your love!",
  usage: "ship <@user>",
  run: (client, message, args) => {

let target = message.mentions.members.first();

if(!target) {

return message.channel.send('Please mention someone!')

}
    
let response = Math.round(`${Math.random(0,100)}`)

  let embed = new discord.MessageEmbed()
  .setTitle('LOVE')
  .setDescription(`${message.author} is ${response}% in love with ${target}`)
  .setColor('RED')
  
  
  message.channel.send(embed)
  





}
}
