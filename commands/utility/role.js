const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "role",
  description: "A role utility command",
  category: "utility",
  run: async (bot, message, args) => {
     if (!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(
          "Sorry but you do not have permission to use this command!"
        );
      }
    
    
message.channel.send(`Please say r!role-remove or r!roles-add!`)

  }
};
