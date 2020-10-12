const antiswear = require("../../models/antiswear");
module.exports = {
  name: "toggleantiswear",
  description: "Toggle antiswear",
  category: "config",
  aliases: ["tas"],
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
            `Antiswear Disabled :white_check_mark:`
          );
          
        } else if (!data) {
          let newData = new antiswear({
            Guild: message.guild.id,
            Value: "true",
          });
          newData.save();
          message.channel.send(
            ` Antiswear Enabled :white_check_mark: `
          );
        }
    });
      }
    }
