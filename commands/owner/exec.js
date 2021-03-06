const discord = require("discord.js")
module.exports = {
    name: 'exec',
    owneronly: true,
    aliases: ["execute", "run", "r"],
    description: "this command is dev only so i wont show any desription!",
    run: async(bot, message, args) => {
        let user = args[0]
        if(!args[0]) return message.channel.send("You need to provide a user for this command.")
        user = message.mentions.users.first()
        if(!user) return message.channel.send("That isnt a valid user")
        user = message.guild.member(user.id)
        if(!args[1]) return message.channel.send("Give me a command")
        let command = bot.commands.get(args[1].replace("a!", ""))
        if(!command) return message.channel.send("That isn't a valid command.")
        if(command){
            message.author = user.user
            let args2 = message.content.slice(user.id.length + 3 + 6 + args[1].length).trim().split(/ +/g)
            args2.splice(args2.indexOf(args[0]), user.id + 3)
            args2.splice(args2.indexOf(`a!${command.name}`), command.name.length + 2)

            console.log("Someone used the execute command ")
            }
    }
}

