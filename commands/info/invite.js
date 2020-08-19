const discord = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["servers", "servernumber", "guildsjoined", "guilds"],
  category: "info",
  description: "invite link",
  usage: "invite",
  run: (client, message, args) => {
let embed9 = new discord.MessageEmbed()
      .setTitle("Invite Me")
      .setDescription(` Joined Servers: **${client.guilds.cache.size}** 
      Online Users: **${client.users.cache.size}**
`)
      .setURL(`https://discord.com/oauth2/authorize?client_id=736933259178541177&scope=bot&permissions=2146958847`)
      .setColor("RANDOM")
      .setFooter(`Thank you for inviting!`);
      message.channel.send(embed9)
       
}}
