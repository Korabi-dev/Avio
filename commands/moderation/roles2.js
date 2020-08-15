const Discord = require("discord.js");

module.exports = {
  name: "role-add",
  aliases: ["roleadd"],
  description: "Mute anyone who break rules",
  category: "moderation",
  usage: "mute <@mention> <reason>",
  run: async (client, message, args) => {

   if (!message.member.hasPermission("BAN_MEMBERS")) {
  return message.channel.send(
    "Sorry but you do not have permission to take roles!"
  );
}

if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
  return message.channel.send("I do not have permission to manage roles.");
}

const user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
const role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()

user.addRole(role)

message.channel.send(`I have added the role ${role} to ${user}`) 
    
 
    
  }
};
