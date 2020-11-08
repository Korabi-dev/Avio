const Timeout = new Set();
const { MessageEmbed, Message, Client } = require("discord.js");
const discord = require("discord.js");
const { prefix } = require("../../config.json");
const ms = require("ms");
const db = require("../../db");
const custom = require("../../models/custom");
const antiswear = require("../../models/antiswear")

/**
 * @param {Client} bot
 * @param {Message} message
 */
module.exports = async (bot, message) => {
  message.channel.messages.fetch();
  if (message.author.bot) return;
 if(!message.guild) return;
 
  if(message.content.toLowerCase().includes("grabify.link")) {
    message.delete();
   }
   if(message.content.toLowerCase().includes("leancoding.co")) {
    message.delete();
   }
   if(message.content.toLowerCase().includes("stopify.co")) {
    message.delete();
   }
   if(message.content.toLowerCase().includes("freegiftcards.co")) {
    message.delete();
   }
   if(message.content.toLowerCase().includes("joinmy.site")) {
    message.delete();
   }
   if(message.content.toLowerCase().includes("curiouscat.club")) {
    message.delete();
   }
   if(message.content.toLowerCase().includes("catsnthings.fun")) {
    message.delete();
   }
   if(message.content.toLowerCase().includes("catsnthing.com")) {
    message.delete();
   }
   
   if(message.content.toLowerCase() === '<@!736933259178541177>') {
    message.channel.send(
          `The prefix for ${message.guild.name} is \`${
            (await db.get(`Prefix_${message.guild.id}`))
              ? await db.get(`Prefix_${message.guild.id}`)
              :  "a!"
          }\``
        );
        }
        if(message.content.toLowerCase() === '<@736933259178541177>') {
          message.channel.send(
                `The prefix for ${message.guild.name} is **${
                  (await db.get(`Prefix_${message.guild.id}`))
                    ? await db.get(`Prefix_${message.guild.id}`)
                    :  "a!"
                }**`
              );
              }
  
   let newPrefix = (await db.get(`Prefix_${message.guild.id}`))
    ? await db.get(`Prefix_${message.guild.id}`)
    : prefix;
  if (!message.content.toLowerCase().startsWith(newPrefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (!message.guild) {
    return;
  }
  const args = message.content.slice(newPrefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) {
    return;
  }
  



  let command = bot.commands.get(cmd);
  if (!command) command = bot.commands.get(bot.aliases.get(cmd));
  
    

  if (command) {
    if(command.owneronly){
      if(bot.owners.includes(message.author.id)){
       return command.run(bot, message, args)
      } else if(!bot.owners.includes(message.author.id)){
        return ctx(`:x: || The Command ${command.name} is Developer only therefor you may not use it.`)
      }
    }
    if (command.timeout) {
      if (Timeout.has(`${message.author.id}${command.name}`)) {
        return message.reply(
          `You can only use this command every ${ms(command.timeout)}!`
        );
      } else {
        command.run(bot, message, args);
        Timeout.add(`${message.author.id}${command.name}`);
        setTimeout(() => {
          Timeout.delete(`${message.author.id}${command.name}`);
        }, command.timeout);
      }
    } else {
      try {
        command.run(bot, message, args);
      } catch (e) {
        custom.findOne(
          { Guild: message.guild.id, Command: cmd },
          async (err, data) => {
            if (err) throw err;
            if (data) return message.channel.send(data.Content.replace(/{user}/g, message.author).replace(/{server_name}/g, message.guild.name));
            else return;
          }
        );
      } 
     }
  } 
};
