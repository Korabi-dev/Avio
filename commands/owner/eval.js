const { MessageAttachment, discord, MessageEmbed  } = require('discord.js');
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
const { inspect } = require('util');
const { Type } = require('@extreme_hero/deeptype');


module.exports = {
    name: 'eval',
    owneronly: true,
    aliases: ["e", "dev", "d"],
    description: "this command is dev only so i wont show any desription!",
    run: async(bot, message, args) => {
        
        this.clean = function(text) {
            if (typeof text === 'string') {
              text = text.replace(/`/g, `\`${String.fromCharCode(8203)}`).replace(/@/g, `@${String.fromCharCode(8203)}`).replace(new RegExp(bot.token, 'gi'), '****');
            }
        return text;
        }
        var msg = "Hi"
        if (!args.length) return msg = await message.channel.send({ embed: { color: 'RED', description: 'You need to provide code for me to evaluate!' }});
        let code = args.join(' ');
        code = code.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
        let evaled;
        try {
          const start = process.hrtime();
          evaled = eval(code);
          if (evaled instanceof Promise) {
            evaled = await evaled;
          }
    
          const stop = process.hrtime(start);
          const response = [
            `**Output:** \`\`\`js\n${this.clean(inspect(evaled, { depth: 0 }))}\n\`\`\``,
            `**Type:** \`\`\`ts\n${new Type(evaled).is}\n\`\`\``,
            `**Time Taken:** \`\`\`${(((stop[0] * 1e9) + stop[1])) / 1e6}ms \`\`\``,
          ]
          const res = response.join('\n');
          if (res.length < 2000) {
           msg = await message.channel.send({embed: { color: 'GREEN', description: res }});
          } else {
            const output = new MessageAttachment(Buffer.from(res), 'output.txt');
           msg = await message.channel.send(output)
}
        } catch(err) {
          console.log(err);
          return msg = await message.channel.send({ embed: { color: 'RED', description: `An error occured: \`\`\`x1\n${this.clean(err)}\n\`\`\``}})
        }
        await msg.react("❌")
        await msg.react("➖")

        const filter = (reaction, user) => {
            return ['➖', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        
        msg.awaitReactions(filter, { max: 1, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();
        
                if (reaction.emoji.name === '➖') {
                    const embed = new MessageEmbed().setDescription("Eval output hidden!").setColor("RANDOM")
                    msg.edit(embed)
                } else if(reaction.emoji.name === '❌'){
                    message.delete()
                    msg.delete()
                }
            })
            .catch(collected => {
                return;
            });
    
    
    
}
}

