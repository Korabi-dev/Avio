const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "dice",
  description: "Replies with a random number between 1-6.",
  category: "fun",
  run: async (bot, message, args) => {
   
     let responses = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`Dice`)
        .setDescription(`You rolled the number : ${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
   },
};
