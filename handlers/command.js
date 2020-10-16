  const discord = require("discord.js")
  const ascii = require('ascii-table')
  let table = new ascii("Commands");
  table.setHeading('Command', ' Load status');
const { readdirSync } = require("fs");
const { join } = require("path");
module.exports = (bot) => {
 

  readdirSync("./commands/").map((dir) => {
    const commands = readdirSync(`./commands/${dir}/`).map((cmd) => {
      let pull = require(`../commands/${dir}/${cmd}`);
       if (pull.name) {
        table.addRow(pull.name,'✅')
      bot.commands.set(pull.name, pull);
         }else {
        table.addRow(pull.name, `❌ -> Missing a Command.name or Command.name is not a string!`)
        
      }if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name));
    });
  });
  const channel = bot.channels.cache.get('766600021784920115'); 
  console.log(channel)
  //channel.messages.cache.fetch('766600353151451168')
  //.then(message => message.edit(table.toString()))
  //.catch(console.error);
 
};
