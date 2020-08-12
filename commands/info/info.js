const discord = require("discord.js");

module.exports = {
  name: "info",
   category: "info",
   description: "get the commands",
  usage: "help",
  run: (client, message, args) => {
   let embed = new discord.MessageEmbed()
    .setTitle("Commands:")
    .setDescription(` Prefix,8ball,announce,whois,dm,giveaway,meme,poll,suggest,reddit,say,snipe,trivia,oldest,ping,findalt,report,warn,mute,kick,warns,ban,role,emoji,timer,support,    invite,slowmode,embedify,kill,pp,hug,kiss,membercount,pat,ship,av,dice.`)
    .setColor("#ff2050")
    .setFooter(`Made by Korabi20#8725 and owned by glitch!#3950`);
    
    message.channel.send(embed)
}}
