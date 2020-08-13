const db = require("../../db");
module.exports = {
  name: "prefix",
  description: "Set the prefix of the guild!",
  category: "config",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
return message.channel.send(`${message.author.username} you need administrator premissions to use this command.`)
}
    
   if(message.author.id === ''){
if (!args[0])
      return message.channel.send(
        `The prefix for ${message.guild.name} is \`${
          (await db.get(`Prefix_${message.guild.id}`))
            ? await db.get(`Prefix_${message.guild.id}`)
            :  "r!"
        }\``
      );
    await db.set(`Prefix_${message.guild.id}`, args[0]);
    message.channel.send(`Set the prefix to \`${args[0]}\`!`);
  }
};

  return console.log(`${message.author.username} just changed the prefix!`)
} 
    
    if (!args[0])
      return message.channel.send(
        `The prefix for ${message.guild.name} is \`${
          (await db.get(`Prefix_${message.guild.id}`))
            ? await db.get(`Prefix_${message.guild.id}`)
            :  "r!"
        }\``
      );
    await db.set(`Prefix_${message.guild.id}`, args[0]);
    message.channel.send(`Set the prefix to \`${args[0]}\`!`);
  },
};
