const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../../config.json");



const discord = require("discord.js");

module.exports = {
  name: "stop",
  aliases: ["leave"],
  description: "Stop the music and take rest ;)",
   run: async(client, message, args) => {
  
     let embed = new MessageEmbed()
.setColor("BLUE");

    const { youtubechannel } = message.member.voice;
      
    if (!youtubechannel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL")
      return message.channel.send(embed);
    }
    
     if(youtubechannel !== client.me.youtubechannel){
let notsame = new MessageEmbed()
.setcolor("RED")
.setDescription('We are not in the same channel.')
}
     
     try {
     youtubechannel.leave();
     } catch (error) {
            return message.channel.send(`Something went wrong!`)
        }
     
     
     let left = new MessageEmbed()
     .setColor("BLUE")
     .setDescription("Sucessfully left the voice channel!")
     message.channel.send(left)
   
  }
};
