const antiswear = require("../../models/antilink");
module.exports = {
  name: "toggleantiinvite",
  description: "Toggle antiinvite",
  usage: "<command>",
  category: "config",
  aliases: ["tai"],
  timeout: 5000,
  run: async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command (premission needed: Administrator)`)
      }
      
      
  antiswear.findOne(
        { Guild: message.guild.id },
        async (err, data) => {
          if (err) throw err; 
      if (data) {
       data.delete()
        message.channel.send(
            `AntiInvite Disabled :white_check_mark:`
          );
          
        } else if (!data) {
          let newData = new antiswear({
            Guild: message.guild.id,
            });
          newData.save();
          message.channel.send(
            ` AntiInvite Enabled :white_check_mark: `
          );
        }
    });
      }
    }
