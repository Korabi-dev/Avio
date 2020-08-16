const discord = require("discord.js");
const client = new discord.Client();

module.exports = {
  name: "serversjoined",
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "serversjoined",
  run: (client, message, args) => {

return message.channel.send(`${client.guilds.cache.size}`);


}
}
