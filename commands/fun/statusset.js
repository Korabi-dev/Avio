const discord  = require("discord.js");
const bot = new discord.Client();

module.exports = {
    name: "setactivity",
    aliases: ["setstatus"],
    category: "moderation",
    run: async (client, message, args) => {

if(message.author.id !== '638476135457357849') {
return;
}
        
bot.user.setActivity(args.join(" "))
        message.channel.send(`${args.join(" ")}`)

}
}
