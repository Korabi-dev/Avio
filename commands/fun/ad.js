const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ad",
  description: "Advertise your server",
  category: "fun",
  run: async (bot, message, args) => {
    let Str = message.content.slice(bot.prefix.length + 2 + 1);
    if (!args[0])
      return message.channel.send(`You did not specify your advert!`);
    bot.channels.cache
      .get("723679963282276387")
      .send(
        new MessageEmbed()
          .setThumbnail(message.author.displayAvatarURL())
          .setTitle(`New advertisement from ${message.author.tag}!`)
          .setDescription(Str)
          .setColor(`BLUE`)
      );
  },
};
//!ad then your messa.ge....
//668559422687281203
