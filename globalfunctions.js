const { MessageEmbed, Message, Client } = require("discord.js");
const discord = require("discord.js");
const config = require("./config.json")
const ms = require("ms");

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

    global.ctx = function ctx(msg) {
        if(!msg){
          return message.channel.send(":x: | No Message Found in the ctx function.")
        }else {
            message.channel.send(msg)
        }
         
        
        
    }
    global.mc = message.channel;

}