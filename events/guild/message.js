const Timeout = new Set();
const { MessageEmbed, Message, Client } = require("discord.js");
const discord = require("discord.js");
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
  if(message.content.toLowerCase.includes("grabify")) {
    message.delete();
    message.channel.send(`${message.author} ip grabbers are against discord ToS and you are not allowed to use them!`)
  } 
  if(message.content === '<@736933259178541177>') {
  message.channel.send(
        `The prefix for ${message.guild.name} is \`${
          (await db.get(`Prefix_${message.guild.id}`))
            ? await db.get(`Prefix_${message.guild.id}`)
            :  "a!"
        }\``
      );
}
   if(message.content === '@Avio#1150'){
     message.channel.send(
        `The prefix for ${message.guild.name} is \`${
          (await db.get(`Prefix_${message.guild.id}`))
            ? await db.get(`Prefix_${message.guild.id}`)
            :  "a!"
        }\``
      );
}
  
  if(message.content === 'Avio Help') {

     let Embed = new discord.MessageEmbed()
        .setTitle(`Help`)
        .setDescription(
          `Hey **${message.author.username}** Here are the help commands `
        )
        .setColor(`RED`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
        .setFooter(`Note: Make a channel called edit-log to see the old content of edited messages in this guild!`)
        .addFields(
          { name: "a!help-moderation", value: `Sends you the moderation commands!`, inline: true },
          { name: "a!help-info", value: `Sends you the information commands!`, inline: true },
          { name: "a!help-fun", value: `Sends you the fun commands!`, inline: true },
          { name: "a!help-utility", value: `Sends you the utility commands!`, inline: true },
          { name: "a!help-nsfw", value: `Sends you the nsfw commands!`, inline: true },
          { name: "a!help-music", value: `Sends you the music commands!`, inline: true },
       );
      
      message.channel.send(Embed);
    
}
  
  
    if(message.content === 'Avio help') {

     let Embed2 = new discord.MessageEmbed()
        .setTitle(`Help`)
        .setDescription(
          `Hey **${message.author.username}** Here are the help commands `
        )
        .setColor(`RED`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
        .setFooter(`Note: Make a channel called edit-log to see the old content of edited messages in this guild!`)
        .addFields(
          { name: "a!help-moderation", value: `Sends you the moderation commands!`, inline: true },
          { name: "a!help-info", value: `Sends you the information commands!`, inline: true },
          { name: "a!help-fun", value: `Sends you the fun commands!`, inline: true },
          { name: "a!help-utility", value: `Sends you the utility commands!`, inline: true },
          { name: "a!help-nsfw", value: `Sends you the nsfw commands!`, inline: true },
          { name: "a!help-music", value: `Sends you the music commands!`, inline: true },
       );
      
      message.channel.send(Embed2);
    
}
  
  if(message.content === 'avio Help') {

     let Embed3 = new discord.MessageEmbed()
        .setTitle(`Help`)
        .setDescription(
          `Hey **${message.author.username}** Here are the help commands `
        )
        .setColor(`RED`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
        .setFooter(`Note: Make a channel called edit-log to see the old content of edited messages in this guild!`)
        .addFields(
          { name: "a!help-moderation", value: `Sends you the moderation commands!`, inline: true },
          { name: "a!help-info", value: `Sends you the information commands!`, inline: true },
          { name: "a!help-fun", value: `Sends you the fun commands!`, inline: true },
          { name: "a!help-utility", value: `Sends you the utility commands!`, inline: true },
          { name: "a!help-nsfw", value: `Sends you the nsfw commands!`, inline: true },
          { name: "a!help-music", value: `Sends you the music commands!`, inline: true },
       );
      
      message.channel.send(Embed3);
    
}  
  
  
  
    if(message.content === 'avio help') {

     let Embed4 = new discord.MessageEmbed()
        .setTitle(`Help`)
        .setDescription(
          `Hey **${message.author.username}** Here are the help commands `
        )
        .setColor(`RED`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
        .setFooter(`Note: Make a channel called edit-log to see the old content of edited messages in this guild!`)
        .addFields(
          { name: "a!help-moderation", value: `Sends you the moderation commands!`, inline: true },
          { name: "a!help-info", value: `Sends you the information commands!`, inline: true },
          { name: "a!help-fun", value: `Sends you the fun commands!`, inline: true },
          { name: "a!help-utility", value: `Sends you the utility commands!`, inline: true },
          { name: "a!help-nsfw", value: `Sends you the nsfw commands!`, inline: true },
          { name: "a!help-music", value: `Sends you the music commands!`, inline: true },
       );
      
      message.channel.send(Embed4);
    
}
  
  
  
  let newPrefix = (await db.get(`Prefix_${message.guild.id}`))
    ? await db.get(`Prefix_${message.guild.id}`)
    : prefix;
  if (!message.content.toLowerCase().startsWith(newPrefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (!message.guild) return;
  const args = message.content.slice(newPrefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) {
    const Embed = new MessageEmbed()
        .setTitle(`Help`)
        .setDescription(
          `Hey **${message.author.username}** Here are the help commands `
        )
        .setColor(`RED`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
        .setFooter(`Note: Make a channel called edit-log to see the old content of edited messages in this guild!`)
        .addFields(
          { name: "a!help-moderation", value: `Sends you the moderation commands!`, inline: true },
          { name: "a!help-info", value: `Sends you the information commands!`, inline: true },
          { name: "a!help-fun", value: `Sends you the fun commands!`, inline: true },
          { name: "a!help-utility", value: `Sends you the utility commands!`, inline: true },
          { name: "a!help-nsfw", value: `Sends you the nsfw commands!`, inline: true },
          { name: "a!help-music", value: `Sends you the music commands!`, inline: true },
       );
      
     return message.channel.send(Embed);
  }
  



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
