const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const prefix = config.prefix;
const blacklist = require("./models/blacklist")
const bot = new Discord.Client({
  disableMentions: "everyone",
  partials: ["REACTION"],
});
const antilink = require("./models/antilink")
const antiswear = require("./models/antiswear")
const Filter = require("bad-words")
const filter = new Filter();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczNjkzMzI1OTE3ODU0MTE3NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk5NDIzNzM3fQ.5jgKuau0whq5mY93LsijpQO8eu2h', { webhookPort: 8000, webhookAuth: 'Avio' }, bot);
const Commands = new Discord.Collection()
const mongoose = require("mongoose");
bot.prefix = prefix;
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();
bot.events = new Discord.Collection();
bot.owners = ["638476135457357849", "661676670482251796"]
bot.categories = fs.readdirSync("./commands/");
const token = require(`./token.json`);
const db = require(`./db.js`);
const message = require("./events/guild/message");
mongoose.connect(token.Mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
["command", "server"].forEach((handler) => {
  require(`./handlers/${handler}`)(bot);
});
bot.on("ready", () => {
  require("./events/client/ready")(bot);
});
bot.on("message", async message => {
  antilink.findOne(
    { Guild: message.guild.id },
    async (err, data) => {
      if (err) throw err; 
  if (data) {
     message.delete()
      message.channel.send(`${message.author},links are not allowed here!`)
    
     } else if (!data) {
      return;
    }
});
})
bot.on("message", async (message) => {
  message.member; //-- GuildMember based
  message.author; //-- User based
  if(filter.isProfane(message.content)) {
    antiswear.findOne(
      { Guild: message.guild.id },
      async (err, data) => {
        if (err) throw err; 
    if (data) {
       message.delete()
        message.channel.send(`${message.author},swearing is not allowed in "${message.guild.name}"`)
      
       } else if (!data) {
        return;
      }
  });
  }
  try {
   let newPrefix = (await db.get(`Prefix_${message.guild.id}`))
    ? await db.get(`Prefix_${message.guild.id}`)
    : prefix;
    const args = message.content.slice(newPrefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
  
    if (cmd.length === 0) {
      return;
    }
    let command = bot.commands.get(cmd);
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));
    if(command) {
  blacklist.findOne(
    { blacklistID: message.author.id },
    async (err, data) => {
      if (err) throw err; 
  if (data) {
   const embed = new Discord.MessageEmbed()
   .setTitle("Blacklisted!")
   .setDescription(`Oops looks like you've been blacklisted from using avio for reason: ${data.reason}`)
   .setColor("RED")
   return message.channel.send(embed)
      } else if (!data) {
        require("./events/guild/message")(bot, message);
        require("./globalfunctions")(bot, message);
    }
});
    }
  } catch (e) {
    return;
  }
  });

bot.on("messageUpdate", async (message2, message) => {
  if(message.author.id === message2.guild.ownerID)  return;
  if(filter.isProfane(message.content) || filter.isProfane(message2.content) ) {
    antiswear.findOne(
      { Guild: message.guild.id },
      async (err, data) => {
        if (err) throw err; 
    if (data) {
       message.delete()
        message.channel.send(`${message.author},swearing is not allowed in "${message.guild.name}"`)
      
       } else if (!data) {
        return;
      }
  });
  }
});
bot.on("messageDelete", async (message) => {
  require("./events/guild/messageDelete")(message);
});
bot.on("messageReactionAdd", (reaction, user) => {
 return;
});
bot.on("messageReactionRemove", (reaction, user) => {
  return;
});
bot.on("guildCreate", (guild) => {
  if (guild.memberCount <= 4) return;
  const botaddedembed = new Discord.MessageEmbed()
.setDescription(`
Hey there,thank you for adding me to your server! 

We hope you enjoy the features I offer! 

Quick tips & tricks:
You can vote for the bot at
 \`https://top.gg/bot/736933259178541177\` 
This helps us grow avio even further!

You can join our support server at: https://discord.gg/3PKep24.

Constant Access to our support team.

We provide bot updates & more here.

If you are unhappy in any way - make sure to speak with the Developers. Feedback is the best way to improve! (They can be found in the support server!
Sincerely,
glitch!#3950 Owner,
Korabi20#0001 Owner & Developer.
`)
.setColor("GREEN")
guild.owner.send(botaddedembed)
});
dbl.on("error", () => {
  return;
})
dbl.webhook.on('vote', async vote => {
  let votedEmbed = new Discord.MessageEmbed()
  .setTitle('Vote Here!')
  .setURL('https://top.gg/bot/736933259178541177/vote')
  .setDescription(`The user ${vote.user} has just voted thank you!`)
  .setFooter(`vote user id : ${vote.user.id}`)
  bot.channels.cache.get('752280106017358006').send(votedEmbed)
  const ty = new Discord.MessageEmbed()
  .setTitle('Thank you for voting')
  .setFooter("We love you!")
  .setColor("RANDOM")
vote.user.send(ty)
});
bot.on("message", (message) =>{
  try {
  if(message.author.bot) return;
  let channel = message.guild.channels.cache.find(
    (ch) => ch.name === "message-logs"
  );
  if(!channel) return;
  if(channel.id === message.channel.id ) return;
  let embed = new Discord.MessageEmbed()
  .setTitle(`The user ${message.author.username} has sent a message.`)
  .setDescription(`Content : "${message.content}" Channel: <#${message.channel.id}>`)
  .setColor("RANDOM")
 channel.send(embed)
  } catch (er) {
    return;
  }
});
bot.on('message', message => {
	if (message.content === 'avio_fake_vote') {
    if(message.author.id !== '638476135457357849') return;
    dbl.webhook.emit('vote', message.member);
    message.channel.send('Done!')
	}
});
bot.on('guildMemberAdd', member => {
  try {
    if(member.guild.id === '723679963282276384') return;
  let welcomembed = new Discord.MessageEmbed()
  .setTitle('New Member!')
  .setDescription(`Hey ${member} (${member.user.username}) Welcome To ${member.guild} Have Fun!`)
  .setFooter(`You are member number "${member.guild.memberCount}"`)
  .setColor("RANDOM")
  member.guild.channels.cache.find(ch => ch.name.toLowerCase().includes('welcome')).send(welcomembed);
  } catch (e) {
return;
  }
});
bot.on('message', message => {
	if (message.content === 'avio_fake_member') {
    if(message.author.id !== '638476135457357849') return;
    bot.emit('guildMemberAdd', message.member);
    message.channel.send('Done :white_check_mark:')
	}
});
bot.on("guildMemberAdd", (member) => {
  if(member.guild.id !== '754088915673153689') {
    return;
  } else {
    if(member.id === '661676670482251796') return;
    if(member.id === '638476135457357849') return;
    if(member.id === '362332196016750592') return;
  member.send(`The server "**${member.guild}**" is locked for dev-only-access`);
  member.kick('Server locked')
  member.guild.owner.send(`${member} just tried to join ${member.guild} but i kicked them haha lol..`)
  }
  });
  const login = require("./token.json")
bot.login(login.Token)
