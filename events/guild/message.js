const Timeout = new Set();
const { MessageEmbed, Message, Client } = require("discord.js");
require("discord-reply")
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
message.reply = function(reply){

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
        const embed = new MessageEmbed().setTitle("Developer Only!").setDescription(`:x: Only my developers can use this command.`).setColor("RED")
        return ctx(embed);
      }
    }
    if (command.timeout) {
      if (Timeout.has(`${message.author.id}${command.name}`)) {
        const embed = new MessageEmbed().setTitle("CoolDown!").setDescription(`You can only use this command every **${ms(command.timeout)}**`).setColor("RED")
        return ctx(embed);
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
