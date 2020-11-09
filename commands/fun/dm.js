const discord = require('discord.js')
const antiswear = require("../../models/opt")
module.exports = {
  name: "dm",
  description: "DM a user in the guild",
  category: "fun",
  timeout: 10000,
  run: async (bot, message, args) => {
    
    
    
          if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }
    

    
    
    let user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

     let sender = `${message.author.username}`
   
     
     
    
    
    if (!user)
      return message.channel.send(
        `You did not mention a user, or you gave an invalid id`
      );
      antiswear.findOne(
        { userID: user.id || user.user.id },
        async (err, data) => {
          if (err) throw err; 
      if (data) {
      const emb = new discord.MessageEmbed().setTitle("Error!").setDescription("This user isn\'t accepting DMs sorry..")
          return ctx(emb)
        } else if (!data) {
          if (!args.slice(1).join(" "))
          return message.channel.send("You did not specify your message");
          
         user.user
          .send(`From ${message.author.username}: ` + args.slice(1).join(" "))
          .catch(() => message.channel.send("That user could not be DMed!"))
          .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
        
        }
    });
    
  }
}
