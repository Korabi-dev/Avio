const discord = require("discord.js")
module.exports = {
     category: "info",
     description: "get the info for a command!",
     run: async (bot, message, args) => {
         try {
        const command = bot.commands.get(args[0]);
        let aliases = command.aliases;
        if(!args[0]) return message.channel.send(":x: | Please Provide a command name!")
        if(!command) return message.channel.send(`:x: | Could not find the command \"${args[0]}\"`)
        let name = command.name;
        let description = command.description;
        let usage = command.usage;
        let cat = command.category;
        if(!aliases){
            aliases = "No Aliases Found!";
        }
       if(!description) {
           description = "No Destiption Found";
       }
       if(!usage) {
           usage = "No usage Found!";
       }
       if(cat) cat = "No category found!"
       const embed = new discord.MessageEmbed()
       .setTitle("Command Info!")
       .setDescription(`Command Name: ${name}\nCommand Aliases: ${aliases}\nCommand Category: ${cat}\nCommand Description: ${description}\nCommand Usage: ${usage}`)
       .setColor("BLUE")
       .setTimestamp()
       return message.channel.send(embed)
    } catch (e) {
        message.channel.send(`Oops an error occured please report this to the dev if it isn't already fixed! ${e}`)
    }
     }
    }