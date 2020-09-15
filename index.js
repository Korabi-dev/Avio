const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const prefix = config.prefix;
const bot = new Discord.Client({
  disableMentions: "everyone",
  partials: ["REACTION"],
});
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczNjkzMzI1OTE3ODU0MTE3NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk5NDIzNzM3fQ.5jgKuau0whq5mY93LsijpQO8eu2h', bot);
const Commands = new Discord.Collection()
const mongoose = require("mongoose");
bot.prefix = prefix;
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.snipes = new Discord.Collection();
bot.events = new Discord.Collection();
bot.categories = fs.readdirSync("./commands/");
const token = require(`./token.json`);
const message = require("./events/guild/message");
mongoose.connect(token.Mongo, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
["command", "server"].forEach((handler) => {
  require(`./handlers/${handler}`)(bot);
});
bot.on("guildCreate", (guild) => {
  try{
  if (guild.memberCount <= 4) {
    let owner = guild.owner;
    let messageembednooob = new Discord.MessageEmbed()
    .setDescription(`
    Hey there, in our Security Script we've detected your server "${guild}" to be a Fake Server.

Q: What is defined as a fake server?
A: A server created for the sole purpose of having bots for rewards, etc, with no real intention to add any other humans.

If you believe there was an issue/error, please contact our Developers in our support server:  https://discord.gg/fpsZvz8
    
    `)
    .setColor("RED")
    guild.owner.send(messageembednooob)
      let aviobye = new Discord.MessageEmbed()
      .setTitle('I just left a fake/alt server')
      .setDescription(`Server Name: "**${guild}**" Owner: ${owner} (id: ${owner.id})`)
      .setFooter(`People stop inviting me to fake servers you know i will just leave DUH`)
      .setColor("RANDOM")
       bot.channels.cache.get('752610879966675006').send(aviobye)
       return guild.leave();
       }
  } catch (e) {
    return;
  }
});
bot.on("ready", () => {
  require("./events/client/ready")(bot);
});
bot.on("message", async (message) => {
  message.member; //-- GuildMember based
  message.author; //-- User based
  require("./events/guild/message")(bot, message);
});
bot.on("messageUpdate", async (oldMessage, newMessage) => {
  return;
});
bot.on("messageDelete", async (message) => {
  require("./events/guild/messageDelete")(message);
});
bot.on("messageReactionAdd", (reaction, user) => {
  require("./events/guild/messageReactionAdd")(reaction, user);
});
bot.on("messageReactionRemove", (reaction, user) => {
  require("./events/guild/messageReactionRemove")(reaction, user);
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
glitch!#3950 Owner & Developer
and Korabi20#0001 Owner & Developer
`)
.setColor("GREEN")
guild.owner.send(botaddedembed)
});
bot.on("ready", () => {
  let avioup = new Discord.MessageEmbed()
  .setTitle('Avio just started')
  .setFooter('Started by Korabi20')
  .setColor("RANDOM")
  bot.channels.cache.get('741229874307530752').send(avioup)
});
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
  } catch (e) {
    return;
  }
});
dbl.on('posted', () => {
  console.log('Server count posted!');
})
dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
dbl.isWeekend().then(weekend => {
  if (weekend) console.log("Woo! Multiplier time BITCH!")
});
bot.on('message', message => {
	if (message.content === 'avio_fake_vote') {
    if(message.author.id !== '638476135457357849') return;
    dbl.webhook.emit('vote', message.member);
    message.channel.send('Done!')
	}
});
bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
  if (!channel) return;
  let welcomembed = new Discord.MessageEmbed()
  .setTitle('New Member!')
  .setDescription(`Hey ${member} (${member.tag}) Welcome To ${member.guild} Have Fun!`)
  .setFooter(`You are member number "${member.guild.memberCount}"`)
  .setColor("RANDOM")
  channel.send(welcomembed);
});
bot.on('message', message => {
	if (message.content === 'avio_fake_member') {
    if(message.author.id !== '638476135457357849') return;
    bot.emit('guildMemberAdd', message.member);
    message.channel.send('Done :white_check_mark:')
	}
});

bot.login(process.env.BOT_TOKEN);
