const { MessageEmbed } = require("discord.js")
const discord = require("discord.js")
const bot = new discord.Client();
const ms = require("ms")
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczNjkzMzI1OTE3ODU0MTE3NyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk5NDIzNzM3fQ.5jgKuau0whq5mY93LsijpQO8eu2h6jjlD3TqqvW2urE', bot);


const { Util } = require("discord.js");
const { YOUTUBE_API_KEY, QUEUE_LIMIT, COLOR } = require("../../config.json");
const ytdl = require("ytdl-core");
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(YOUTUBE_API_KEY);
const { play } = require("./system.js");
module.exports = {
  name: "join",
  aliases: ["j"],
  description: "Play the song and feel the music",
  run: async(bot, message, args) => {

    dbl.hasVoted(user).then(voted => {
      if (!voted) {
         return message.channel.send(`To use music commands you need to vote here: https://top.gg/bot/736933259178541177/vote`)
      }
    });

const ychannel = message.member.voice.channel;
    if(!ychannel){
return message.channel.send('You are not in a channel!')
}
ychannel.join();
message.channel.send(`Joined :white_check_mark:`)



}
}
