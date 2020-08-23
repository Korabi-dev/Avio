const { Message, send } = require("discord.js");

let config = require('../../config.json')
module.exports = (bot) => {

bot.on('guildMemberAdd', member => {

  member.send(`Hey ${member} welcome to the server ${member.guild.name} have fun!`);
});
};
