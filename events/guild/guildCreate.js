const { Message, send } = require("discord.js");

let config = require('../../config.json')
module.exports = (bot, member) => {

let channel =  (ch) => ch.name === "announcmnents"

channel.send(`Hello,Thank you for adding me  run the command \`a!help`\ or say \`Avio Help`\ to see the commands.`)


}
