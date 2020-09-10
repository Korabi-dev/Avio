const discord = require("discord.js");
const client = new discord.Client();

module.exports = {
  name: "invite",
  aliases: ["servers", "servernumber", "guildsjoined", "guilds"],
  category: "info",
  description: "invite link",
  usage: "invite",
  run: (client, message, args) => {
    let users = client.guilds.cache.reduce((q, b) => q + b.memberCount, 0); 
let embed9 = new discord.MessageEmbed()
      .setTitle("Invite Me")
      .setDescription(` Joined Servers: **${client.guilds.cache.size}** 
      Bot Users: **${users}**
      `)
      .setURL(`https://discord.com/oauth2/authorize?client_id=736933259178541177&scope=bot&permissions=2146958847`)
      .setColor("RANDOM")
      .setFooter(`Thank you for inviting!`);
      message.channel.send(embed9)
       
}}
