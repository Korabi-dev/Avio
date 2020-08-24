const { MessageEmbed } = require("discord.js");
const { formatDate } = require("../../functions");
module.exports = {
  name: "whois",
  description: "Get your own or someone else's avatar",
  usage: "[user mention]",
  category: "fun",
  run: async (bot, message, args) => {
    let Embed = new MessageEmbed();
    let roles = [];
    if (!message.mentions.users.first()) {
      message.member.roles.cache.forEach((role) => {
        roles.push(role);
      });
      Embed.setTitle(`Your information!`);
      Embed.setThumbnail(message.author.displayAvatarURL());
      Embed.setColor(`RANDOM`);
      Embed.setDescription(
        `**JoinDate:**
        ${formatDate(message.member.joinedAt)} 

          **Created Date**
          ${message.author.createdAt}
        **\nID:**
           ${
          `${message.author.id}`
        } 
        **\nRoles:**
        ${roles}`
      );
      return message.channel.send(Embed);
    } else {
      let User = message.mentions.members.first();
      User.roles.cache.forEach((role) => {
        roles.push(role);
      });
      Embed.setTitle(`${bot.users.cache.get(User.id).tag}'s info!`);
      Embed.setThumbnail(bot.users.cache.get(User.id).displayAvatarURL());
      Embed.setColor(`RANDOM`);
      Embed.setDescription(
        `**Joined:**
        ${formatDate(User.joinedAt)}

         **Created Date**
         ${User.user.createdAt}
        **\nID:** ${
          User.id
        
        }
        **\nRoles:** 
        ${roles}`
      );
      return message.channel.send(Embed);
    }
  },
};
