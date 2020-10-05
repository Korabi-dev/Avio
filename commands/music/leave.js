const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../../config.json");




const discord = require("discord.js");
const bot = new discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczNjkzMzI1OTE3ODU0MTE3NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk5NDIzNzM3fQ.5jgKuau0whq5mY93LsijpQO8eu2h6jjlD3TqqvW2urE', bot);


module.exports = {
  name: "leave",
  aliases: ["disconnect"],
  description: "Stop the music and take rest ;)",
   run: async(client, message, args) => {
    let user = message.author.id;
  
    try {
     let embed = new MessageEmbed()
.setColor("BLUE");

    const { channel } = await message.member.voice;
      
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("You need to be in a voice channel before i can leave it 😂")
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
