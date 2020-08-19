const discord  = require("discord.js");

module.exports = {
    name: "fuck",
    aliases: ["sex"],
    category: "moderation",
    run: async (client, message, args, bot) {

if(message.author.id !== '638476135457357849') return;

bot.user.setActivity(`${args.join(" ")}`)

}
