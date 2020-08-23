const { Message, send } = require("discord.js");

let config = require('../../config.json')
module.exports = (bot) => {

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name == 'welcome');
if (!channel){
console.log('No channel found!')
}
  channel.send(`Welcome to the server, ${member}!`);
});
};
