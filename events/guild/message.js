const Timeout = new Set();
const { MessageEmbed, Message, Client } = require("discord.js");
const { prefix } = require("../../config.json");
const ms = require("ms");
const db = require("../../db");
const custom = require("../../models/custom");
/**
 * @param {Client} bot
 * @param {Message} message
 */
module.exports = async (bot, message) => {
  message.channel.messages.fetch();
  if (message.author.bot) return;
  let newPrefix = (await db.get(`Prefix_${message.guild.id}`))
    ? await db.get(`Prefix_${message.guild.id}`)
    : prefix;
  if (!message.content.toLowerCase().startsWith(newPrefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (!message.guild) return;
  const args = message.content.slice(newPrefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = bot.commands.get(cmd);
  if (!command) command = bot.commands.get(bot.aliases.get(cmd));

  if (command) {
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
      command.run(bot, message, args);
    }
  } else {
    custom.findOne(
      { Guild: message.guild.id, Command: cmd },
      async (err, data) => {
        if (err) throw err;
        if (data) return message.channel.send(data.Content);
        else return;
      }
    );
  }
};
