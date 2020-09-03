const discord = require('discord.js');
const client =new discord.Client();



module.exports = {
    name: 'evaluate',
    run: async (client, message, args) => {
if(message.author.id !== '') return;
try {
  const code = args.join(" ");
  let evaled = eval(code);

  if (typeof evaled !== "string")
    evaled = require("util").inspect(evaled);

  message.channel.send(clean(evaled), {code:"xl"});
} catch (err) {
  message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
}
 }
}