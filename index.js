const Discord = require("discord.js");
require("discord-inline-replys")
const bot = new Discord.Client()
const fs = require("fs");
const config = require("./config.json");
const prefix = config.prefix;
const blacklist = require("./models/blacklist")
const fetch = require("node-fetch")
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
bot.owners = ["638476135457357849", "764901658303922247"]
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
  try {
  if (message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission("BAN_MEMBERS")) {
    return;
  }
  if(message.author.bot) return;
  if(message.content.toLowerCase().includes("https://discord.gg/") || message.content.toLowerCase().includes("http://discord.gg/") || message.content.toLowerCase().includes("discord.gg/")) {
  antilink.findOne(
    { Guild: message.guild.id },
    async (err, data) => {
      if (err) throw err; 
  if (data) {
     message.delete()
      message.channel.send(`${message.author},Invite links are not allowed here!`)
    } else if (!data) {
      return;
    }
});
  }
} catch (e){
  return;
}
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

dbl.on("error", () => {
  return;
})
dbl.webhook.on('vote', async vote => {
  fetch(`https://wild-invincible-antique.glitch.me/dblvote?user=${vote.user}`)
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
