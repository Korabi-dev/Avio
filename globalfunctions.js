const Timeout = new Set();
const { MessageEmbed, Message, Client } = require("discord.js");
const discord = require("discord.js");
const { prefix } = require("../../config.json");
const ms = require("ms");
const db = require("../../db");
const custom = require("../../models/custom");
const antiswear = require("../../models/antiswear")
const Filter = require('bad-words');
const filter = new Filter({ placeHolder: '#'});
/**
 * @param {Client} bot
 * @param {Message} message
 */
module.exports = async (bot, message) => {

    global.exit = function exit(exitcode) {
        if(!exitcode){
          return message.channel.send(":x: | Please give me an exit code")
        }
        if (isNaN(exitcode)) {
        return message.channel.send(":x: | Please mention an exit code thats a number not a string value.")
        }else {
        process.exit(exitcode)
        }
    }


}