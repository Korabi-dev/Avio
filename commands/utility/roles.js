const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "roles",
  description: "A role utility command",
  category: "utility",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `You do not have admin, ${message.author.username}`
      );
    if (args[0].toLowerCase() == "create") {
      let rName = message.content.split(`${bot.prefix}roles create `).join("");
      let rColor;
      args.forEach((arg) => {
        if (arg.startsWith("#")) {
          rColor = arg;
        }
      });
      if (!rName) {
        return message.channel.send(
          `You did not specify a name for your role!`
        );
      }
      if (!rColor) {
        return message.channel.send(
          `You did not specify a color for your role (example #16832).`
        );
      }
      if (rColor >= 16777215)
        return message.channel.send(
          `Please provide a number between 0 and 16777215`
        );
      if (rColor <= 0)
        return message.channel.send(
          `That hex color range was too small! Keep it between 0 and 16777215`
        );
      rName = rName.replace(`${rColor}`, ``);
      let rNew = await message.guild.roles.create({
        data: {
          name: rName,
          color: rColor,
        },
      });
      const Embed = new MessageEmbed()
        .setTitle(`New role!`)
        .setDescription(
          `${message.author.username} has sucessfully created the role "${rName}"\nHex Color: ${rColor}\nRole ID: ${rNew.id}`
        )
        .setColor(rColor);
      message.channel.send(Embed);
    } else if (args[0].toLowerCase() == "delete") {
      let roleDelete =
        message.guild.roles.cache.get(args[1]) ||
        message.guild.roles.cache.find((r) => r.name == args[1]);
      if (!roleDelete)
        return message.channel.send(
          `You did not specify the name or id of the role you wish to delete!`
        );
      roleDelete.delete();
      const Embed1 = new MessageEmbed()
        .setTitle(`Deleted role!`)
        .setColor(roleDelete.color)
        .setDescription(
          `${message.author.username} has sucessfully deleted the role "${roleDelete.name}"\nID: ${roleDelete.id}\nHex Color: ${roleDelete.color}`
        );
      message.channel.send(Embed1);
    }
  },
};