const discord = require("discord.js");

module.exports = {
  name: "eval",
  category: "config",
  description: "Owner only!",
  usage: "eval [code]",
  run: (client, message, args) => {



if (message.author.id !== "638476135457357849") {
 let embed9 = new discord.MessageEmbed()
      .setTitle("This command is owner only!")
      .setColor("RED")
 
 
 return message.channel.send(embed9)
}
      const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      return text;
}
        try {

      const code = args.slice().join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
    }
