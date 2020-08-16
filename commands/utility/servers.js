const discord = require("discord.js");
const client = new discord.Client();

module.exports = {
  name: "serversjoined",
  aliases: ["servers", "servernumber", "guildsjoined", "guilds"],
  category: "moderation",
  description: "Kick anyone with one shot xD",
  usage: "serversjoined",
  run: (client, message, args) => {
    
     let embed9 = new discord.MessageEmbed()
      .setTitle("Invite Me")
      .setDescription(`i am in **${client.guilds.cache.size}** servers thank you for the support!`)
      .setColor("RANDOM")
      .setURL(`https://discord.com/oauth2/authorize?client_id=736933259178541177&scope=bot&permissions=2146958847`)
      .setFooter(`Made by Korabi20`);
      return message.channel.send(embed9)




}
}
