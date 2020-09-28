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
    if(message.guild.id === '723679963282276384'){
      if(msg.content.toLowerCase().includes('https://')){
        return message.channel.send(`This message (snipe) has a link in it and thats not allowed here`)
      }
    }
    if(message.guild.id === '723679963282276384'){
      if(msg.content.toLowerCase().includes('http://')){
        return message.channel.send(`This message (snipe) has a link in it and thats not allowed here`)
      }
    }
    const Embed = new MessageEmbed()
      .setAuthor(
        msg.author.tag,
        msg.author.displayAvatarURL({ dynamic: true, size: 256 })
      )
      .setColor("RANDOM")
      .setDescription(msg.content)
      .setFooter(`Date: ${msg.date} | ${args[0] || 1}/${snipes.length}`);
    if (msg.attachment) Embed.setImage(msg.attachment);
    message.channel.send(Embed);
  },
};
