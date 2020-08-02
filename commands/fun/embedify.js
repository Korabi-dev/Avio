const discord = require('discord.js')
module.exports = {
    name: "embedify",
    description: "Get the bot to say what ever you want! embeded",
    usage: "<msg>",
    run: async (bot, message, args) => {
      if (!message.member.permissions.has("MANAGE_MESSAGES")) return;
      let MSG = message.content.split(`${bot.prefix}embedify `).join("");
      if (!MSG)
        return message.channel.send(`You did not specify your message to send!`);
    let embed = new discord.MessageEmbed()
    .setTitle(MSG)
    .setColor("#ff2050")
    .setFooter(`Made by Korabi20#0001 and owned by glitch!#3950`);
    
    message.channel.send(embed)
    message.delete();
    },
  };