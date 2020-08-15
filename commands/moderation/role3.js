const Discord  = require("discord.js");

module.exports = {
    name: "role-remove",
    aliases: ["roleremove"],
    category: "moderation",
    run: async (client, message, args) => {
      
     if (!message.member.hasPermission("BAN_MEMBERS")) {
  return message.channel.send(
    "Sorry but you do not have permission to take roles!"
  );
}

if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
  return message.channel.send("I do not have permission to manage roles.");
}

let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
let role = args.join(" ").slice(22);
let therole = message.guild.roles.find(`name`, role);

if(user.roles.has(therole.id));
await(user.removeRole(therole.id));

    }
  };
