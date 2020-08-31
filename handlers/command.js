  const discord = require("discord.js")
  const client = new discord.Client();
const { readdirSync } = require("fs");
module.exports = (bot) => {
  client.queue = new Map();
  client.vote = new Map();

  readdirSync("./commands/").map((dir) => {
    const commands = readdirSync(`./commands/${dir}/`).map((cmd) => {
      let pull = require(`../commands/${dir}/${cmd}`);
      console.log(`Loaded command ${pull.name}`);
      bot.commands.set(pull.name, pull);
      if (pull.aliases) {
        if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name));
      }
    });
  });
};
