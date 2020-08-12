const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "8ball",
  description: "There is a big chance I insult you!",
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
        .setDescription(`You rolled a number : ${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  },
};
