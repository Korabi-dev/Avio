const discord = require('discord.js')
module.exports = {
  name: "dm",
  description: "DM a user in the guild",
  category: "fun",
  timeout: 10000,
  run: async (bot, message, args) => {
    
    
    
          if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }
    
    if(message.author.id === '519293166453522443') {
return message.channel.send(`Oh no,it seems like you have been blacklisted from this command reason \"Spamming The Developer."\ there will be no appeal to this.`)    
}
    
    
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

     let sender = `${message.author.username}`
   
     
     
     if(user.id === '519293166453522443') {
return message.channel.send(`Oh no it seems like ${user.user.username} is blacklisted try someone else. `)
}
    
    
    if (!user)
      return message.channel.send(
        `You did not mention a user, or you gave an invalid id`
      );
    if (!args.slice(1).join(" "))
      return message.channel.send("You did not specify your message");
      
     user.user
      .send(`From ${message.author.username}: ` + args.slice(1).join(" "))
      .catch(() => message.channel.send("That user could not be DMed!"))
      .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
      },
  
};
