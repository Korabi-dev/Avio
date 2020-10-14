const discord = require("discord.js")
module.exports = {
    name: "commandinfo",
    aliases: ["cmdinfo"],
     category: "info",
     description: "get the info for a command!",
     run: async (bot, message, args) => {
        const command = bot.commands.get(args[0]);
        if(!args[0]) return message.channel.send(":x: | Please Provide a command name!")
        if(!command) return message.channel.send(`:x: | Could not find the command \"${args[0]}\"`)
        let name = command.name;
        let description = command.description;
        let usage = command.usage;
       if(!description) {
           description = "No Destiption Found";
       }
       if(!usage) {
           usage = "No usage Found!";
       }
       const embed = new discord.MessageEmbed()
       .setTitle("Command Info!")
       .setDescription(`Command Name: ${name}\nCommand Description: ${description}\nCommand Usage: ${usage}`)
       .setColor("BLUE")
       .setTimestamp()
       return message.channel.send(embed)
     }
    }