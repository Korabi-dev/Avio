const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "role",
  description: "A role utility command",
  category: "utility",
  run: async (bot, message, args) => {
message.channel.send(`Please say r!roles-remove or add!`)

  }
};
