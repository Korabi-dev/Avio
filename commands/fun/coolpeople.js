const discord = require("discord.js");
module.exports = {
  name: "coolpeople",
  description: "List of cool people!",
  usage: "<coolpeople>",
  run: async (bot, message, args) => {

    const embed = new discord.MessageEmbed()
    .setTitle("Cool People 😎")
    .setDescription(`Rossana - Coolest/dank 😎😂\n Emile - Second coolest/dank aswell\n More people soon just ask me to add you and if i think you are cool i will!`)
    .setFooter(`Cool people selected by: Korabi20 - Owner & Developer`)
    .setColor("RANDOM")
    const msg = await message.channel.send(embed)
    msg.react("😎")
    msg.react("😂")
    msg.react("🙂")
  }
}