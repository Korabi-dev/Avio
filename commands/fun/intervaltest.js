const config = require("../../config.json")
const discord = require("discord.js")
module.exports = {
    name: "intest",
    description: "There is a big chance I insult you!",
    category: "fun",
    run: async (bot, message, args) => { 
        if(message.author.id !== config.OwnerID) return message.channel.send("Only my dev can use this command")
       const int = setInterval( () => {
            bot.channels.cache.get('764805069127548936').send(`Please Don't delete this channel korabi is using it to test (this message will be sent every 5s)`)

            }, 5000)
            if(args.toLowerCase().includes("~~stop")) {
                clearInterval(int)
                message.channel.send("Stopped :white_check_mark:")
            }
    }
    }