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
    global.setActivity = function setActivity(type, content, url){
      if(url){
        if(type.toLowerCase().includes("Streaming")){
          if(!content) throw new Error("No content specified in the fuction syntax: botActivity(type, content, url[optional])")
         bot.user.setActivity(content, {
          type: "STREAMING",
          url: url
         });
         
        } else if(!url){
          if(!content) throw new Error("No content specified in the fuction syntax: botActivity(type, content, url[optional])")
          if(!type) throw new Error("No type specified in the fuction syntax: botActivity(type, content, url[optional])")
          bot.user.setActivity(content, {
            type: type,
            });
            
        }
      }
    }

}