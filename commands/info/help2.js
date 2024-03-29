const discord = require("discord.js");
const db = require("../../db")
const config = require("../../config.json")
module.exports = {
  name: "help",
  aliases: ["commands", "Info", "information", "cmds", "cmd", "categories"],
   category: "info",
   description: "get the commands",
  usage: "help",
  run: async(bot, message, args) => {
    try {
    let newPrefix = (await db.get(`Prefix_${message.guild.id}`))
    ? await db.get(`Prefix_${message.guild.id}`)
    : config.prefix;
    if(!args[0]){
      let emb = new discord.MessageEmbed()
      .setTitle("Help!")
      .setDescription(`\`${newPrefix}help commands\` - sends all the commands.\n\`${newPrefix}help <command>\` - get info about a specific command.`)
      .setColor("RANDOM")
      return ctx(emb)
    }
    if(args[0].toLowerCase() === 'commands'){
      let emb2 = new discord.MessageEmbed()
      .setTitle("Commands!")
      .setDescription("**Moderation**\n`warn`, `nickname`, `mute`, `role`, `kick`, `warns`, `ban`, `unban`, `clearwarnings`, `purge`\n\n**Info**\n`prefix`, `findalt`, `roleinfo`, `botinfo`, `support`, `invite`, `bans`, `membercount`, `lyrics`, `servers`, `ping`, `serverinfo`, `tips`, `docs`, `fact`, `covid`\n\n**Fun**\n`8ball`, `meme`, `reddit`, `say`, `kill`, `hug`, `kiss`, `pat`, `ship`, `av`, `token`, `dice`, `howgay`, `talk`, `triggered`\n\n**Utility**\n`whois`, `giveaway`, `qrcode`, `poll`, `suggest`, `snipe`, `oldest`, `dm`, `findalt`, `report`, `emoji`, `timer`, `invite`, `slowmode`, `embedify`, `membercount`, `nuke`, `encode`, `decode`, `roles(create/delete)`\n\n**Image**\n`wasted`, `wanted`, `facepalm`, `jail`, `slap`, `shit`, `triggered`, `trash`, `beautiful`, `blur`, `invert`\n\n**Configuration**\n`toggleantiinvite`, `toggleantiswear`, `messagelogs-setup`, `messagelogs-delete`, `toggledms`\n\nThanks for using me you can invite me [here](https://discord.com/oauth2/authorize?client_id=736933259178541177&scope=bot&permissions=2146958847)")
      .setColor("RANDOM")
      return ctx(emb2)
    }
    
        
        let command = bot.commands.get(args[0]);
        if(!command) return message.channel.send(`:x: | Could not find the command \"${args[0]}\".`)
        let name = command.name;
        let description = command.description;
        let aliases = command.aliases;
        let usage = command.usage;
        if(!aliases){
            aliases = "No Aliases Found!";
        }
       if(!description) {
           description = "No Destiption Found";
       }
       if(!usage) {
           usage = "No usage Found!";
       }
       const embed = new discord.MessageEmbed()
       .setTitle("Command Info!")
       .setDescription(`Command Name: ${name}\nCommand Aliases: ${aliases}\nCommand Description: ${description}\nCommand Usage: ${usage}`)
       .setColor("RANDOM")
       .setTimestamp()
       return message.channel.send(embed)
      } catch (e){
        return;
      }
}
}
