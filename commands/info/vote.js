const discord = require("discord.js")
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczNjkzMzI1OTE3ODU0MTE3NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk5NDIzNzM3fQ.5jgKuau0whq5mY93LsijpQO8eu2h6jjlD3TqqvW2urE',{ webhookPort: 8000, webhookAuth: 'Avio' }, bot);

module.exports = {
    name: "vote",
     category: "info",
     description: "get the commands",
    usage: "help",
    run: (client, message, args) => {
        let user = message.author.id;
        dbl.hasVoted(user).then(voted => {
          if (!voted) {
            const embed1 = new discord.MessageEmbed()
            .setTitle("Click Here To vote!")
            .setURL("https://top.gg/bot/736933259178541177")
            .setFooter("You have not voted yet!")
            message.channel.send(embed1)  
          }else {
          
    const embed = new discord.MessageEmbed()
    .setTitle("Click Here To vote!")
    .setURL("https://top.gg/bot/736933259178541177")
    .setFooter("You have voted ty!")
    message.channel.send(embed)  
          }  
        });
}
}