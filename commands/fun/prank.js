const discord = require('discord.js')
module.exports = {
  name: "prank",
  description: "Prank someone!",
  category: "fun",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES"))
      return message.channel.send("You do not have enough permissions!");
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

     let sender = `${message.author.username}`
    if (!user)
      return message.channel.send(
        `You did not mention a user, or you gave an invalid id`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send("You did not specify your message");
  
      let embed9 = new discord.MessageEmbed() 
      .setTitle("PRANKED")
      .setDescription(`**${message.author.username}** has just praked ${user} with prank name : ` + (args.slice(1).join(" ")))
      .setColor("RANDOM")
      .setFooter(`Made by Korabi20#0001`);
      message.channel.send(embed9)
       }
    
  
}
