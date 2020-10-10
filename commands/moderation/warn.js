const warns = require("../../models/warns");
const Discord = require('discord.js')
module.exports = {
  name: "warn",
  description: "Warn a user",
  category: "moderation",
  usage: "<User mention> <Reason>",
  run: async (bot, message, args) => {
    
     if(!message.member.hasPermission("KICK_MEMBERS")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }
    
    let user = message.mentions.users.first();
    if(user.id === '736933259178541177') {
      return message.channel.send(`No,lol i won't warn myself, nice try though.`)
}
    if(!user) {
      let embed8 = new Discord.MessageEmbed()
      .setTitle("Command: a!warn")
      .setDescription(
      `Description: Warn a member
      Usage: a!warn [user] [reason]
      Example: a!warn @Water#6224 Being rude to staff!`
      )
      .setColor("RANDOM")
      .setFooter(`Made by Korabi20`);
      message.channel.send(embed8)
       }
       const moderator = message.author.id;
       const reason = args.slice(1).join(" ");
       if(!reason){
         return message.channel.send("No Reason provided!")
       }
       if(reason.toLowerCase().includes("~~hidemod")) {
        moderator = "hidden";
       }
      warns.findOne(
      { Guild: message.guild.id, User: user.id },
      async (err, data) => {
        if (err) console.log(err);
        if (!data) {
          let newWarns = new warns({
            User: user.id,
            Guild: message.guild.id,
            Warns: [
              {
                Moderator: message.author.id,
                Reason: reason,
              },
            ],
          });
          newWarns.save();
          message.channel.send(
            `${user.tag} has been warned with the reason of ${args
              .slice(1)
              .join(" ")}. They now have 1 warn.`
          );
        } else {
          data.Warns.unshift({
            Moderator: message.author.id,
            Reason: reason,
          });
          data.save();
          message.channel.send(
            `${user.tag} has been warned with the reason of ${args
              .slice(1)
              .join(" ")}. They know have ${data.Warns.length} warns.`
          );
        }
      }
    );
  },
};
