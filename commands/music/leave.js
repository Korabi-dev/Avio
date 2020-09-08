const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../../config.json");
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczNjkzMzI1OTE3ODU0MTE3NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk5NDIzNzM3fQ.5jgKuau0whq5mY93LsijpQO8eu2h6jjlD3TqqvW2urE', bot);




const discord = require("discord.js");

module.exports = {
  name: "leave",
  aliases: ["disconnect"],
  description: "Stop the music and take rest ;)",
   run: async(client, message, args) => {
    dbl.hasVoted(user).then(voted => {
      if (!voted) {
         return message.channel.send(`To use music commands you need to vote here: https://top.gg/bot/736933259178541177/vote`)
      }
    });
     try {
     let embed = new MessageEmbed()
.setColor("BLUE");

    const { channel } = await message.member.voice;
      
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL")
      return message.channel.send(embed);
    }
    

     
    
     channel.leave();
     
     
     
     let left = new MessageEmbed()
     .setColor("BLUE")
     .setDescription("Sucessfully left the voice channel!")
     .setFooter(`This won't work if you are in a different channel this is just a step to prevent abuse/trolling.`)
     message.channel.send(left)
     } catch (error) {
            return message.channel.send(`oops an error was detected: ${error}`)
        }
  }
};
