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
       
        process.exit(exitcode)
        
    }

    global.ctx = function ctx(msg) {
        if(!msg){
           throw new Error("No Message Found in the ctx function.")
        }else {
            message.channel.send(msg)
        }
         
        
        
    }
    global.mc = message.channel;
    global.author = message.author;
    global.client = message.guild.me;
    }