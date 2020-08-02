const warns = require("../../models/warns");
const Discord = require('discord.js')
module.exports = {
  name: "warn",
  description: "Warn a user",
  category: "moderation",
  usage: "<User mention> <Reason>",
  run: async (bot, message, args) => {
    let user = message.mentions.users.first();
    if(!user) {
      let embed8 = new Discord.MessageEmbed()
      .setTitle("Command: r!warn")
      .setDescription(
      `Description: Warn a member
      Usage: r!warn [user] [reason]
      Example: r!warn @Water#6224 Being rude to staff!`
      )
      .setColor("RANDOM")
      .setFooter(`Made by Korabi20#0001`);
      message.channel.send(embed8)
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
                Reason: args.slice(1).join(" "),
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
            Reason: args.slice(1).join(" "),
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
