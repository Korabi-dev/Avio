  
const Discord = require("discord.js");
const client = new Discord.Client();


module.exports = {
  name: "shutdown",
  description: "There is a big chance I insult you!",
  category: "fun",
  run: async (bot, message, args) => {
  
 if (message.author.id !== '638476135457357849')
      return message.channel.send(
        `You do not have premissions to use this command, ${message.author.username} you are not a dev!`
      );
      
      message.react('👍').then(r => {
                            message.react('👎');
                    });

                
                    message.awaitReactions((reaction, user) => user.id == message.author.id && (reaction.emoji.name == '👍' || reaction.emoji.name == '👎'),
                            { max: 1, time: 30000 }).then(collected => {
                                    if (collected.first().emoji.name == '👍') {
                                            message.channel.send('Shutting down...');
                                            client.destroy();
                                    }
                                    else
                                            message.channel.send('Operation canceled.');
                            }).catch(() => {
                                    message.reply('No reaction after 30 seconds, operation canceled');
                            });
   
  
  }
  }
