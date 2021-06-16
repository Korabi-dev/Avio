const discord = require("discord.js")
module.exports = {
    name: 'exec',
    owneronly: true,
    aliases: ["execute", "run", "r"],
    description: "this command is dev only so i wont show any desription!",
    run: async(bot, message, args) => {
        const usr = message.mentions.users.first();
        const con = args.slice(1).join(" ");
        if (!usr || !con) return message.mentionReply("Invalid args :<")
          message.content = con;
        message.author = usr;
        message.mentions.users.delete(message.mentions.users.first().id);
        await bot.emit("message", message)
           await message.react("✅")
        
    }
}

