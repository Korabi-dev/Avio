const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "role",
  description: "A role utility command",
  category: "utility",
  run: async (bot, message, args) => {
message.channel.send(`To use this command please say r!role-add\(r!roleadd)\ or r!role-remove\(r!roleremove)\`)

  }
}
