const discord = require("discord.js");
const db = require("../../db")
const config = require("../../config.json")
module.exports = {
  name: "help",
  aliases: ["commands", "Info", "information", "cmds", "cmd", "categories"],
   category: "info",
   description: "get the commands",
  usage: "help",
  run: async(bot, message, args) => {
    try {
    let newPrefix = (await db.get(`Prefix_${message.guild.id}`))
    ? await db.get(`Prefix_${message.guild.id}`)
    : config.prefix;
    if(!args[0]) {
 let Embed = new discord.MessageEmbed()
        .setTitle(`Help`)
        .setDescription(
          `Hey **${message.author.username}** Here are the help commands `
        )
        .setColor(`RED`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 256 }))
        .setFooter(`To get info about a specific command use ${newPrefix}help <commandname>`)
        .addFields(
          { name: `${newPrefix}help moderation`, value: `Sends you the moderation commands!`, inline: true },
          { name: `${newPrefix}help info`, value: `Sends you the information commands!`, inline: true },
          { name: `${newPrefix}help fun`, value: `Sends you the fun commands!`, inline: true },
          { name: `${newPrefix}help utility`, value: `Sends you the utility commands!`, inline: true },
          { name: `${newPrefix}help image`, value: `Sends you the image commands!`, inline: true },
          
       );
      
      message.channel.send(Embed);
        }
        if(args[0].toLowerCase() === 'moderation')  {
          let embedmod = new discord.MessageEmbed()
    .setTitle("Commands: Moderation")
    .setDescription(` report,warn,mute,kick,warns,ban,unban,clearwarnings(clearwarns).`)
    .setColor("RED")
   
    
   
    message.channel.send(`Moderation Commands Sent! :white_check_mark:`)
    message.author.send(embedmod)
        }
        if(args[0].toLowerCase() ==='info') {
          let embedinf = new discord.MessageEmbed()
    .setTitle("Commands: Info")
    .setDescription(` prefix,snipe,oldest,ping,findalt,emoji,support,invite,membercount,servers,docs,fact,covid.`)
    .setColor("#ff2050")
    
    
   
    message.channel.send(`Info Commands Sent! :white_check_mark:`)
    message.author.send(embedinf)
        }
        if(args[0].toLowerCase() === 'fun') {
          let embedfn = new discord.MessageEmbed()
          .setTitle("Commands: Fun")
          .setDescription(` 8ball,meme,poll,reddit,say,kill,hug,kiss,pat,ship,av,dice,howgay,talk,triggered.`)
          .setColor("GREEN")
         
          
         
          message.channel.send(`Fun Commands Sent! :white_check_mark:`)
          message.author.send(embedfn)

        }
        if(args[0].toLowerCase() === 'utility') {
          let embedut = new discord.MessageEmbed()
    .setTitle("Commands: Utility")
    .setDescription(` Prefix,whois,giveaway,poll,suggest,snipe,oldest,ping,findalt,report,emoji,timer,invite,slowmode,embedify,membercount,nuke,encode,decode,roles(create/delete).`)
    .setColor("ORANGE")
    
    
   
    message.channel.send(`Utility Commands Sent! :white_check_mark:`)
    message.author.send(embedut)
        }
        
        if(args[0].toLowerCase() === 'image') {
          let embednsfw = new discord.MessageEmbed()
          .setTitle("Commands: Images ")
          .setDescription(`wasted,wanted,facepalm,jail,slap,shit,triggered,trash,beautiful,blur,invert`)
          .setColor("GREEN")
        
          
         
          message.channel.send(`Image Commands Sent! :white_check_mark:`)
          message.author.send(embednsfw)
        }
        
        
        const command = bot.commands.get(args[0]);
        if(!command && !args[0].toLowerCase().includes('image') && !args[0].toLowerCase().includes('utility') && !args[0].toLowerCase().includes('fun') && !args[0].toLowerCase().includes('info') && !args[0].toLowerCase().includes('moderation')) return message.channel.send(`:x: | Could not find the command/category \"${args[0]}\"`)
        let name = command.name;
        let description = command.description;
        let aliases = command.aliases;
        let usage = command.usage;
        if(!aliases){
            aliases = "No Aliases Found!";
        }
       if(!description) {
           description = "No Destiption Found";
       }
       if(!usage) {
           usage = "No usage Found!";
       }
       const embed = new discord.MessageEmbed()
       .setTitle("Command Info!")
       .setDescription(`Command Name: ${name}\nCommand Aliases: ${aliases}\nCommand Description: ${description}\nCommand Usage: ${usage}`)
       .setColor("BLUE")
       .setTimestamp()
       return message.channel.send(embed)
      } catch (e){
        return;
      }
}
}
