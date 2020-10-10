const { MessageEmbed } = require('discord.js');
const discord = require("discord.js")
const realtoken = ('GET STICK BUGGED NOOOOOOOB')
const config = require("../../config.json")



module.exports = {
    name: 'evaluate',
    aliases: ["eval2"],
    run: async (bot, message, args) => {
if(message.author.id !== '638476135457357849') return;
try {
  const code = args.join(" ");
  let evaled = eval(code);

let embed = new discord.MessageEmbed()
.setTitle('Output:')
.setDescription(evaled)
.setColor("GREEN")
const msg = await message.channel.send(embed)
} catch (e) {
const errorembed = new discord.MessageEmbed()
.setTitle("Error:")
.setDescription(e)
.setColor("RED")
msg.edit(errorembed)
}
 }
}