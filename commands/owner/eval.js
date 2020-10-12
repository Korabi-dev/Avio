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
module.exports = {
    name: 'eval',
    run: async(bot, message, args) => {
      
        if (message.author.id !== '638476135457357849') {
           
const __e__ = new MessageEmbed()
.setTitle(`This command is dev only.`)
.setColor("RED")

return message.channel.send(__e__)
}
      if(!args[0]){
const __e___ = new MessageEmbed()
.setTitle(`No Code Found.`)
.setColor("RED")

return message.channel.send(__e___)
}  
        const msg = await message.channel.send("Evaluating..");
        try {
            const code = args.join(' ');
           
            const data = eval(code);
           await msg.edit(`:tools: | Eval Sucess!\n\n**Input:**\n \`\`\`js\n ${code}\n\`\`\`\n**Output:**\n \`\`\`js\n ${data}\n\`\`\`\n**Output Type:**\n\`\`\`js\n${typeof(data)}\n\`\`\``)
            await msg.react('❌')
            const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '🔁') && (user.id === message.author.id);
            msg.awaitReactions(filter, { max: 0 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                             case '❌':
                                msg.edit(":tools: | Eval Success! Code Has Been Hidden")
                                break;
                                case '🔁':
                                 msg.edit(`:tools: | Eval Sucess!\n\n**Input:**\n \`\`\`js\n ${code}\n\`\`\`\n**Output:**\n \`\`\`js\n ${data}\n\`\`\`\n**Output Type:**\n\`\`\`js\n${typeof(data)}\n\`\`\``)
                                break;
                        }
                        
                    })
                })
        } catch (e) {
            const Input = args.join(' ')
        return await msg.edit(`:x: | Eval Failed!\n\n**Input:**\n \`\`\`js\n ${Input}\n\`\`\`\n**Error:**\n\`\`\`js\n${e}\n\`\`\``);
}
    }
}
