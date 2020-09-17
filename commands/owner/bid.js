const discord = require("discord.js");
module.exports = {
    name: "bid",
     category: "info",
     description: "get the commands",
    usage: "help",
    run: async (client, message, args) => {
        if(message.guild.id !== '723679963282276384') return;
        if(!args[0]) return message.channel.send(`Please provide the amount you want to bid!`);
        if(!args[0].isNaN) return message.channel.send(`Please provide a number (no letters)!`);
        let success = new discord.MessageEmbed()
        .setTitle('You Placed A Bid!')
        .setDescription(`Amount in robux: **${args[0]}**`)
        .setColor("GREEN")
        const sent = await message.channel.send(success);
        let bid = new discord.MessageEmbed()
        .setTitle('New Bid!')
        .setDescription(`the user ${message.author} (${message.author.username}) has bid **${args[0]}**!`)
        .setColor("BLUE")
        try {
        bot.channels.cache.get('755978311628357664').send(bid)
} catch (e) {
            let error = new discord.MessageEmbed()
            .setTitle('ERROR PLEASE REPORT THIS TO THE DEV!')
            .setDescription(`${e}`)
            .setColor("RED")
        sent.edit(error)
        bid.delete()
        }
    }
}