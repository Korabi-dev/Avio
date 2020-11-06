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
    description: "this command is dev only so i wont show any desription!",
    run: async(bot, message, args) => {
        const owners = ["638476135457357849", "661676670482251796"]
        if(!owners.includes(message.author.id)) return message.channel.send(":x: || This Command Is For My developer Only!")
    if(!args[0]){
    return message.channel.send(":x: | No Code Found.")
    }  
        const msg = await message.channel.send("** **");
        try {
            
            const code = args.join(' ');
            if(code.toLowerCase().includes("process.exit")) {
                const evaled = eval(code)
                return message.channel.send(`\`\`\`js\nExiting the NODE.js process\n\`\`\` `)
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
            const filter = (reaction, user) => (reaction.emoji.name === '❌') && (user.id === message.author.id);
            msg.awaitReactions(filter, { max: 1 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                            case '❌':
                                const embe = new discord.MessageEmbed().setDescription(":tools: | Eval Success! Input And Output Hidden!").setColor("BLUE")
                                msg.edit(embe)
                                msg.reactions.removeAll()
                                break;
                                 }
                       })
                })
        } catch (e) {
            try {
            let data = eval(args.join(' '))
            let type = typeof data;
            if(type === 'boolean'){
                type = '[Boolean]'
            }else if(type === 'bigint'){
                type = "[Bigint]"
            }else if(type === 'function') {type = '[Function]'} 
            else if(type === 'number'){type = `[Number] => ${data.length} characters`}
            else if(type === 'object'){type = '[Object]'}
            else if(type === 'string'){type = `[String] => ${data.length} characters`}
            else if(type === 'symbol'){type = '[Symbol]'}
            else if(type === 'undefined'){type = '[Undefined]'}
                const haste = new hastebin({})
            const link = haste.post(data).then(async(link) => {await msg.edit(`:tools: | Eval Sucess!\n\n**Input:**\n \`\`\`js\n${args.join(' ')}\n\`\`\`\n**Output:**\n \`\`\`js\nHey Looks Like Output was over discordApi Limit heres a hastebin link instead: ${link}\n\`\`\`\n**Output Type:**\n\`\`\`js\n${type}\n\`\`\``);});
            await msg.react('❌')
            const filter2 = (reaction, user) => (reaction.emoji.name === '❌') && (user.id === message.author.id);
            msg.awaitReactions(filter2, { max: 1 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                            case '❌':
                                msg.edit(":tools: | Eval Success! Input And Output Hidden!")
                                msg.reactions.removeAll()
                                break;
                                 }
                       })
                })
        } catch(e) {
        const Input = args.join(' ')
        const haste = new hastebin({})
        let embbedddd = new discord.MessageEmbed()
        .setTitle(":x: | Eval Failed!")
        .setColor("BLUE")
      .setDescription(`📥 **Input:**\n \`\`\`js\n ${Input}\n\`\`\`\n❌ **Error:**\n\`\`\`js\n${e}\n\`\`\``);
     await msg.edit(embbedddd)
      return msg.reactions.removeAll()
        
        }
            }
    }
}
