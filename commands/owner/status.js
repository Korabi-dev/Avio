const discord = require("discord.js")
const client = new discord.Client();

module.exports = {
    name: "set",
    category: "owner",
    run: async (client, message, args) => {
        
        if (args[0].toLowerCase() == "status") {
            const status = args[1]
            client.user.setPresence({ status: (status) });
            message.channel.send(`Status is now set to: ${status}`);
        }

        else if (args[0].toLowerCase() == "presence") {
            const presence = args.slice(1).join(" ");
            client.user.setActivity(presence);
            message.channel.send(`Presence is now set to: ${presence}`);
        }
    }
}