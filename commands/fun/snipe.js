const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "snipe",
  description: "Get a snipe of your choice in the channel!",
  usage: "[snipe number]",
  category: "fun",
  run: async (bot, message, args) => {
    
    const snipes = bot.snipes.get(message.channel.id) || [];
    const msg = snipes[args[0] - 1 || 0];
    if (!msg) return message.channel.send(`There is nothing to snipe here!`);
    
    const Embed = new MessageEmbed()
      .setAuthor( 
        msg.author.tag,
        msg.author.displayAvatarURL({ dynamic: true, size: 256 })
      )
      .setColor("RANDOM")
      .setDescription(msg.content)
      .setFooter(`Date: ${msg.date} | ${args[0] || 1}/${snipes.length}`);
    if (msg.image) Embed.setImage(msg.image);
    message.channel.send(Embed);
  },
};
