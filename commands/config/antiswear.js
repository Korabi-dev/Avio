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
      const truee = ("true");
      const falsee = ("false");
      
  antiswear.findOne(
        { Guild: message.guild.id },
        async (err, data) => {
          if (err) throw err; 
      if (data) {
        if(data.Value === 'true'){
          data.Value = "false"
          data.save();

          message.channel.send(
            `Antiswear Disabled :white_check_mark:`
          );
        }
        } else if (!data) {
          let newData = new antiswear({
            Guild: message.guild.id,
            Value: truee,
          });
          newData.save();
          message.channel.send(
            ` Antiswear Enabled :white_check_mark: `
          );
        }
    });
      }
    }
