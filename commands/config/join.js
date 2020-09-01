const { MessageEmbed } = require("discord.js")

const ms = require("ms")


const { Util } = require("discord.js");
const { YOUTUBE_API_KEY, QUEUE_LIMIT, COLOR } = require("../../config.json");
const ytdl = require("ytdl-core");
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(YOUTUBE_API_KEY);
const { play } = require("../utility/system.js");
module.exports = {
  name: "join",
  aliases: ["j"],
  description: "Play the song and feel the music",
  run: async(bot, message, args) => {

const { ychannel } = message.member.voice;
ychannel.join
message.channel.send(`Joined :white_check_mark:`)



}
}
