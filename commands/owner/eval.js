const { MessageEmbed } = require('discord.js');
const discord = require("discord.js")

const realtoken = ('GET STICK BUGGED NOOOOOOOB')
const config = require("../../config.json")
const ms = require("ms")
const moment = require("moment")
const axios = require("axios")
const commontags = require("common-tags")
const dblapi = require("dblapi.js")
const express = require("express")
const factful = require("factful.js")
const fs = require("fs")
const imageapi = require("imageapi.js")
const mongoose = require("mongoose")
const nodefetch = require("node-fetch")
const os = require("os")
const db = require("../../db")
const canvacord = require("canvacord");
const hastebin = require("hastebin.js");
 


module.exports = {
    name: 'eval',
    owneronly: true,
    description: "this command is dev only so i wont show any desription!",
    run: async(bot, message, args) => {
        
    if(!args[0]){
    return message.channel.send(":x: | No Code Found.")
    }  
    const emb = new discord.MessageEmbed().setTitle("Initializing Evaluation.").setColor("BLUE")
        const msg = await message.channel.send(emb);
        try {
            
            const code = args.join(' ');
            if(code.toLowerCase().includes("process.exit")) {
                 message.channel.send(`\`\`\`js\nExiting the NODE.js process\n\`\`\` `)
                const evaled = eval(code)
               return;
            }
            let data = eval(code)
            let type = typeof data;
            if(type === 'boolean'){
                type = '[Boolean]'
            }else if(type === 'bigint'){
                type = "[Bigint]"
            }else if(type === 'function') {type = '[Function]'} 
            else if(type === 'number'){type = `[Number]`}
            else if(type === 'object'){type = '[Object]'}
            else if(type === 'string'){type = `[String] => ${data.length} characters`}
            else if(type === 'symbol'){type = '[Symbol]'}
            else if(type === 'undefined'){type = '[Undefined]'}
            
            let embbedd = new discord.MessageEmbed()
            .setTitle(":tools: | Eval Sucess!")
            .setColor("BLUE")
           .setDescription(`📥 **Input:**\n \`\`\`js\n ${code}\n\`\`\`\n📤 **Output:**\n \`\`\`js\n ${data}\n\`\`\`\n📃 **Output Type:**\n\`\`\`js\n${type}\n\`\`\``);
            await msg.edit(embbedd)
            
            await msg.react('❌')
            await msg.react('✖')
            const filter = (reaction, user) => (user.id === message.author.id);
            msg.awaitReactions(filter, { max: 1 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                            case '❌':
                                const embe = new discord.MessageEmbed().setDescription(":tools: | Eval Success! Input And Output Hidden!").setColor("BLUE")
                                msg.edit(embe)
                                msg.reactions.removeAll()
                                break;
                                case '✖':
                                msg.delete()
                                break;
                                default:
                                msg.delete()
                                break;
                                 }
                       })
                })
        } catch (e) {
          const Input = args.join(' ')
        let embbedddd = new discord.MessageEmbed()
        .setTitle(":x: | Eval Failed!")
        .setColor("BLUE")
      .setDescription(`📥 **Input:**\n \`\`\`js\n ${Input}\n\`\`\`\n❌ **Error:**\n\`\`\`js\n${e}\n\`\`\``);
     await msg.edit(embbedddd)
     msg.reactions.removeAll()
     msg.react("❌")
     msg.react('✖')
     const filter = (reaction, user) => (user.id === message.author.id);
     msg.awaitReactions(filter, { max: 1 })
         .then((collected) => {
             collected.map((emoji) => {
                 switch (emoji._emoji.name) {
                     case '❌':
                         const embe = new discord.MessageEmbed().setDescription(":x: | Eval Failed! Input And Error Hidden!").setColor("RED")
                         msg.edit(embe)
                         msg.reactions.removeAll()
                         break;
                         case '✖':
                             msg.delete()
                             break;
                             default:
                                msg.delete()
                                break;
                          }
                })
         })
        
        
            }
    }
}
