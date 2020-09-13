const custom = require("../../models/custom");
module.exports = {
  name: "cc",
  description: "Create a custom command",
  category: "config",
  timeout: 5000,
  aliases: ["custom"],
  run: async (bot, message, args) => {
     if (message.author.id !== '638476135457357849')
      return message.channel.send(
        `You do not have premissions to use this command, ${message.author.username} you are not a dev!`
      );
    if (!args[0])
      return message.channel.send(`You did not specify a custom command name!`);
    if (!args.slice(1).join(" "))
      return message.channel.send(`No content specified!`);
    custom.findOne(
      { Guild: message.guild.id, Command: args[0] },
      async (err, data) => {
        if (err) throw err;
        if (data) {
          data.Content = args.slice(1).join(" ");
          data.save();

          message.channel.send(
            `Command **${args[0]}** Has Successfully been updated :white_check_mark:`
          );
        } else if (!data) {
          let newData = new custom({
            Guild: message.guild.id,
            Command: args[0],
            Content: args.slice(1).join(" "),
          });
          newData.save();
          message.channel.send(
            ` Command **${args[0]}** Has Successfully been created :white_check_mark: `
          );
        }
      }
    );
  },
};
