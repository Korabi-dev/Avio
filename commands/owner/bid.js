const discord = require("discord.js");

module.exports = {
    name: "bid",
     category: "info",
     description: "get the commands",
    usage: "help",
    run: async (client, message, args) => {
        if(message.guild.id !== '723679963282276384') return;
        if(message.author.id === '597115059872727073') return message.channel.send(`You have been blacklisted from this command reason: trolling`);
        if(message.channel.id !== '744490276206411848') return message.channel.send(`this is not the bidding channel please go to: <#744490276206411848>`);
        if(!args[0]) return message.channel.send(`Please provide the amount you want to bid!`);
        if (isNaN(args[0][0])) return message.channel.send(`Please provide a number (no letters)!`);
        if(args[0] < 100) return message.channel.send(`The minimum you can bid is 100 robux!`);
        let success = new discord.MessageEmbed()
        .setTitle('You Placed A Bid!')
        .setDescription(`Amount in robux: **${args[0]}**`)
        .setColor("GREEN")
        const sent = await message.channel.send(success);
        let bid = new discord.MessageEmbed()
        .setTitle('New Bid!')
        .setDescription(`the user ${message.author} (${message.author.username}) has bid **${args[0]}**!`)
        .setColor("BLUE")
        let channel = message.guild.channels.cache.find(
            (ch) => ch.name === "bids"
          );
          if(!channel) return message.channel.send('i can\'t see a channel named "bids" please get an admin!');
          channel.send(bid)
        try {
        console.log('New bid go see!')
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