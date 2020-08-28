const { Message, send } = require("discord.js");
const send = require("discord.js");

let config = require('../../config.json')
module.exports = (bot, member) => {
  member.send(`Hey ${member.user.tag} welcome to ${member.guild.name} have fun!`)
}
