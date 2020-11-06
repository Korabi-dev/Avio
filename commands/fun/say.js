module.exports = {
  name: "say",
  description: "Get the bot to say what ever you want!",
  usage: "<message>",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return ctx("You do not have enough permissions to use this command.");
    let MSG = args.slice(0).join(" ");
    if (!MSG) return message.channel.send(`You did not specify the message to send!`);
    if(bot.owners.includes(message.author.id)){
      message.channel.send(MSG);
      return message.delete();
    }
    if(message.mentions.roles.first() && !message.member.permissions.has("MANAGE_MESSAGES")){
      return ctx("You can't mention a role unless you can mention everyone by default.")
    }
    message.channel.send(MSG);
    message.delete();
  },
};
