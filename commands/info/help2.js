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
        .setFooter(`Note: run the command "${newPrefix}messagelogs-setup" to see the content of messages in this guild, if you want to undo it run the command "${newPrefix}messagelogs-delete"`)
        .addFields(
          { name: `${newPrefix}help moderation`, value: `Sends you the moderation commands!`, inline: true },
          { name: `${newPrefix}help info`, value: `Sends you the information commands!`, inline: true },
          { name: `${newPrefix}help fun`, value: `Sends you the fun commands!`, inline: true },
          { name: `${newPrefix}help utility`, value: `Sends you the utility commands!`, inline: true },
          { name: `${newPrefix}help nsfw`, value: `Sends you the nsfw commands!`, inline: true },
          { name: `${newPrefix}help image`, value: `Sends you the nsfw commands!`, inline: true },
          
       );
      
      message.channel.send(Embed);
        }
        if(args[0].toLowerCase().includes('moderation'))  {
          let embedmod = new discord.MessageEmbed()
    .setTitle("Commands: Moderation")
    .setDescription(` report,warn,mute,kick,warns,ban,unban,clearwarnings(clearwarns).`)
    .setColor("RED")
    .setFooter(`Made by Korabi20#8725 and owned by glitch!#3950`);
    
   
    message.channel.send(`Moderation Commands Sent! :white_check_mark:`)
    message.author.send(embedmod)
        }
        if(args[0].toLowerCase().includes('info')) {
          let embedinf = new discord.MessageEmbed()
    .setTitle("Commands: Info")
    .setDescription(` prefix,snipe,oldest,ping,findalt,emoji,support,invite,membercount,servers,docs,fact,covid.`)
    .setColor("#ff2050")
    .setFooter(`Made by Korabi20#8725 and owned by glitch!#3950`);
    
   
    message.channel.send(`Info Commands Sent! :white_check_mark:`)
    message.author.send(embedinf)
        }
        if(args[0].toLowerCase().includes('fun')) {
          let embedfn = new discord.MessageEmbed()
          .setTitle("Commands: Fun")
          .setDescription(` 8ball,meme,poll,reddit,say,kill,hug,kiss,pat,ship,av,dice,howgay,talk,triggered.`)
          .setColor("GREEN")
         
          
         
          message.channel.send(`Fun Commands Sent! :white_check_mark:`)
          message.author.send(embedfn)

        }
        if(args[0].toLowerCase().includes('utility')) {
          let embedut = new discord.MessageEmbed()
    .setTitle("Commands: Utility")
    .setDescription(` Prefix,whois,giveaway,poll,suggest,snipe,oldest,ping,findalt,report,emoji,timer,invite,slowmode,embedify,membercount,nuke,encode,decode,roles(create/delete).`)
    .setColor("ORANGE")
    
    
   
    message.channel.send(`Utility Commands Sent! :white_check_mark:`)
    message.author.send(embedut)
        }
        if(args[0].toLowerCase().includes('nsfw')) {
          let embednsfw = new discord.MessageEmbed()
          .setTitle("Commands: NSFW")
          .setDescription(`Fuck,pp.`)
          .setColor("GREEN")
        
          
         
          message.channel.send(`NSFW Commands Sent! :white_check_mark:`)
          message.author.send(embednsfw)
        }
        if(args[0].toLowerCase().includes('image')) {
          let embednsfw = new discord.MessageEmbed()
          .setTitle("Commands: Images ")
          .setDescription(`wasted,wanted,facepalm,jail,slap,shit,triggered,trash,beautiful,blur,invert`)
          .setColor("GREEN")
        
          
         
          message.channel.send(`Image Commands Sent! :white_check_mark:`)
          message.author.send(embednsfw)
        }
}
}
