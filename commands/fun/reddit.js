const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  name: "reddit",
  description: "Get a meme!",
  category: "fun",
  run: async (bot, message, args) => {
    let subreddit = args.slice(1).join(" ")
    if(!subreddit){
return message.channel.send(`No subreddit found!`)
}
    
    let img = await api(subreddit, true);
    const Embed = new MessageEmbed()
      .setTitle(`A meme from r/${subreddit}`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed);
  },
};
