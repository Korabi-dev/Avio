const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../../config.json");



const discord = require("discord.js");

module.exports = {
  name: "stop",
  aliases: ["leave"],
  description: "Stop the music and take rest ;)",
   run: async(client, message, args) => {
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
     message.channel.send(left)
     .setFooter(`This won't work if you are in a different channel this is just a step to prevent abuse/trolling.`)
     } catch (error) {
            return message.channel.send(`oops an error was detected: ${error}`)
        }
  }
};
