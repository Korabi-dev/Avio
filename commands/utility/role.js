const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "role",
  description: "A role utility command",
  category: "utility",
  run: async (bot, message, args) => {
     if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(
          "Sorry but you do not have permission to use this command!"
        );
      }
    
    
message.channel.send(`Please say r!role-remove or r!roles-add!`)

  }
};
