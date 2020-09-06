const discord = require("discord.js");
const bot = new discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczNjkzMzI1OTE3ODU0MTE3NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk5NDIzNzM3fQ.5jgKuau0whq5mY93LsijpQO8eu2h6jjlD3TqqvW2urE', bot);

module.exports = {
    name: "hasvoted",
     category: "info",
     description: "get the commands",
    usage: "help",
    run: (client, message, args) => {
try {
    let user = args[0];
 dbl.hasVoted(user).then(voted => {
    if (voted) {
        message.channel.send(`${user.user.username} has voted!`)
    }
    else {
        message.channel.send('This user has not voted!')
    }
});

} catch (e) {
    return message.channel.send(`oops : ${e}`)
}



    }
}