  const discord = require("discord.js")
  const client = new discord.Client();
const { readdirSync } = require("fs");
const { join } = require("path");
module.exports = (bot) => {
 

  readdirSync("./commands/").map((dir) => {
    const commands = readdirSync(`./commands/${dir}/`).map((cmd) => {
      let pull = require(`../commands/${dir}/${cmd}`);
      console.log(`Loaded command ${pull.name} 1`);
      bot.commands.set(pull.name, pull);
      if (pull.aliases) {
        if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name));
      }
    });
  });
};
