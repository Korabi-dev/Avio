const discord = require("discord.js")
const client = new discord.Client();
const { readdirSync } = require("fs");
const { join } = require("path");
const PREFIX = ("m!");
module.exports = (bot) => {

client.on("warn", info => console.log(info));

client.on("error", console.error)

//DEFINIING
client.commands = new discord.Collection()
client.prefix = PREFIX
client.queue = new Map();
client.vote = new Map();


  readdirSync("./commands/").map((dir) => {
    const cmdFiles = readdirSync(`./commands/${dir}/`).map((cmd) => {
      let pull = require(`./commands/config/${cmd}`);
      console.log(`Loaded command ${pull.name} m!`);
      bot.commands.set(pull.name, pull);
      if (pull.aliases) {
        if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => bot.aliases.set(alias, pull.name));
      }
    });
  });


//WHEN SOMEONE MESSAGE
client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  
  if(message.content.startsWith(PREFIX)) { //IF MESSSAGE STARTS WITH MINE BOT PREFIX
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/) //removing prefix from args
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
    
  try  { //TRY TO GET COMMAND AND EXECUTE
      client.commands.get(command).execute(client, message, args)
    //COMMAND LOGS
   } catch (err) { //IF IT CATCH ERROR
      console.log(err)
      message.reply("I am getting error on using this command")
    }
    
  }
  
  
});
}
