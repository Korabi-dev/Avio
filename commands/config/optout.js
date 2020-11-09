const antiswear = require("../../models/opt");
module.exports = {
  name: "nodms",
  description: "Toggle dms",
  usage: "<command>",
  category: "config",
  aliases: ["optout"],
  timeout: 5000,
  run: async (bot, message, args) => {
    
      
      
  antiswear.findOne(
        { userID: message.author.id },
        async (err, data) => {
          if (err) throw err; 
      if (data) {
       data.delete()
        message.channel.send(
            `Opted out of the dm command :white_check_mark:`
          );
          
        } else if (!data) {
          let newData = new antiswear({
            userID: message.author.id,
            });
          newData.save();
          message.channel.send(
            ` Opted in the dm command :white_check_mark:`
          );
        }
    });
      }
    }