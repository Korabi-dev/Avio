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
    
     if(channel !== client.channel){
let notsame = new MessageEmbed()
.setColor("RED")
.setDescription('We are not in the same channel.')
}
     
    
     channel.leave();
     
     
     
     let left = new MessageEmbed()
     .setColor("BLUE")
     .setDescription("Sucessfully left the voice channel!")
     message.channel.send(left)
     } catch (error) {
            return;
        }
  }
};
