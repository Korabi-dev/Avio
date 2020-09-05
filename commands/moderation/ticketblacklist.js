const { MessageEmbed } = require("discord.js")
const discord = require("discord.js")

module.exports = {
  name: "ticketblacklist",
  category: "moderation",
  description: "blacklist anyone with one shot xD",
  usage: "ticketblacklist <@user>",
  run: (client, message, args) => { 
    if(!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command needed premission: MANAGE ROLES`)
      }
        if(message.guild.id !== '723679963282276384') return;

        let blacklist = message.guild.roles.cache.find(x => x.name === "Ticket Blacklist")
        let target =   message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);

        if(!target) return message.channel.send(`Please mention someone or give an id!`);

        if(!blacklist) {
            return message.channel.send(`Could not find a role named "Ticket Blacklist" in this guild!`)
        }

        const alreadyHasRole = member._roles.includes(blacklist.id);

        if (alreadyHasRole){
            let embed = new MessageEmbed()
            .setTitle('Unblacklisted user!')
            .setDescription(`${messagec.author.username} successfully unblacklisted ${target.username} from tickets`)
return member.roles.remove(blacklist).then(() => message.channel.send(embed));
}

let embed2 = new MessageEmbed()
.setTitle('Blacklisted user!')
.setDescription(`${messagec.author.username} successfully blacklisted ${target.username} from using tickets`)

member.roles.add(blacklist).then(() => message.channel.send(embed2));





  }
}