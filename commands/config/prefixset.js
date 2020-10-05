const db = require("../../db");
module.exports = {
  name: "prefix",
  description: "Set the prefix of the guild!",
  category: "config",
  run: async (bot, message, args) => {
    if(args[1] === "~~admin"){
      if(message.author.id !== '638476135457357849') return message.channel.send('Sorry but only my developer can set the prefix this way please do not include --admin at the end');
      await db.set(`Prefix_${message.guild.id}`, args[0]);
      return message.channel.send(`Hey dear dev i set the prefix to ${args[0]} for this server :white_check_mark:`);
    }
    
    if(message.author.id === '719890577306419221') {
return message.channel.send(`Oh no looks like you have been blacklisted from this command with reason : abusing`);
}
    
 if (!message.member.permissions.has("KICK_MEMBERS")) {
return message.channel.send(`${message.author.username} you need more premissions to use this command.`)
}
    
if (!args[0])
      return message.channel.send(
        `The prefix for ${message.guild.name} is \`${
          (await db.get(`Prefix_${message.guild.id}`))
            ? await db.get(`Prefix_${message.guild.id}`)
            :  "a!"
        }\``
      );
    await db.set(`Prefix_${message.guild.id}`, args[0]);
    message.channel.send(`Set the prefix to \`${args[0]}\`!`);
  },
};
