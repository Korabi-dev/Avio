  
const { MessageEmbed, discord } = require('discord.js');

module.exports = {
    name: "nickname",
    aliases: ["nick"],
    category: "extra",
    run: async (client, message, args) => {
    
    
    
    let target =   message.mentions.members.first(); 
    
    let nickname = args.slice(1).join(" ")
    
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }
    
    if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) {
      return message.channel.send(`**${message.author.username}**, I do not have enough permission to use this command`)
    }
    
    if(!target){
return message.channel.send(`Please mention someone!`)
}
    
    if(!args[0]){
return message.channel.send('please mention a new nickname for the user!')
}
 
 target.setNickname(nickname)
        

    } 

}

