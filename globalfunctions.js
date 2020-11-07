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
    global.setStatus = function setStatus(type, content, url){
        if(!type)throw new TypeError("please provide a type.")
        if(!content) throw new TypeError("please provide some content.")
        if(typeof type !== 'string'){
            throw new TypeError("type must be a string.")
                }
                if(typeof content !== 'string'){
                    throw new TypeError("content must be a string.")
                }
                
                if(type.toLowerCase() === 'streaming'){
                     if(!url){
                        throw new TypeError("please provide a url as the type is streaming.")
                    }else if(url){
                        if(typeof url !== 'string'){
                            throw new TypeError("url must be a string.")
                        }else {
                        bot.user.setActivity(content, {
                            type: "STREAMING",
                            url: url
                        })
                    }
                    }
                    
                }else{
                    bot.user.setActivity(content, {type: type.toUpperCase()})
                }
            

    }
    }