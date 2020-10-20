const discord = require("discord.js");

module.exports = {
    name: "status",
     category: "owner",
     description: "Owner Only",
    usage: "Onwer only",
    run: async (bot, message, args) => {

        let type = args[0]
        let content = args[1]
        let url = args[2]
        if(!type){
            return ctx(":x: || Please Provide The Type Of Status to set!")
        }
        if(!content){
           
            return ctx(":x: || Please provide some content to set to the status!")
        }
        if(type.toLowerCase().includes("streaming")){
            if(!url){
                return ctx(":x: || please Provide a url to set to the streaming status")
            } else if(url){
                if(type.toLowerCase().includes("streaming")){
                bot.user.setActivity(content, {
                    type: "STREAMING",
                    url: url
                   });
                } else {return ctx(":x: || Can't set a url to a status type that\'s not \"streaming\" ")}
            }
        }
        bot.user.setActivity(content, {
            type: type,
            });
    }
}