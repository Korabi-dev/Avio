const Discord = require("discord.js");
const fs = require("fs");
const config = require("./config.json");
const prefix = config.prefix;
const bot = new Discord.Client({
  disableMentions: "everyone",
  partials: ["REACTION"],
});
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczNjkzMzI1OTE3ODU0MTE3NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk5NDIzNzM3fQ.5jgKuau0whq5mY93LsijpQO8eu2h6jjlD3TqqvW2urE',{ webhookPort: 5000, webhookAuth: 'Avio' }, bot);

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
bot.on("message", (message) => {
  try{
  if (message.guild.memberCount <= 5) {
    message.channel.send('This Server Has 5- Members And Therefore Is Recognized As An Alt/Fake server,I Will Now Leave')
    message.guild.owner.send(`Hey i have left your server "**${message.guild}**" beacuse it was flagged for being under 5 members and not legit sorry!`)
      message.guild.leave();
      let aviobye = new Discord.MessageEmbed()
      .setTitle('I just left a fake/alt server')
      .setDescription(`Server name : "**${message.guild}**"`)
      .setFooter(`Owner: ${message.guild.owner}`)
      .setColor("RANDOM")
      bot.channels.cache.get('752610879966675006').send(aviobye)
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
bot.on("guildCreate", (bot, member) => {
console.log(`AYY ANOTHER ONE`)
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
  let embed = new Discord.MessageEmbed()
  .setTitle(`The user ${message.author.username} has sent a message in ${message.channel.name}`)
  .setDescription(`Content : ${message.content}`)
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


bot.login(process.env.BOT_TOKEN);
