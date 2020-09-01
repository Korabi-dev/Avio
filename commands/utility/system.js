const ytdlDiscord = require("ytdl-core-discord");
const { MessageEmbed } = require("discord.js")
const { QUEUE_LIMIT, COLOR } = require("../config.json");

module.exports = {
  async play(song, message, bot) {
    const queue = bot.queue.get(message.guild.id);
let embed = new MessageEmbed()
.setColor(COLOR);

    if (!song) {
      queue.channel.leave();
      bot.queue.delete(message.guild.id);
      embed.setAuthor("MUSIC QUEUE IS ENDED NOW :/")
      return queue.textChannel
        .send(embed)
        .catch(console.error);
    }

    try {
      var stream = await ytdlDiscord(song.url, {
        highWaterMark: 1 << 25
      });
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }

      if (error.message.includes === "copyright") {
        return message.channel.send("THIS VIDEO CONTAINS COPYRIGHT CONTENT");
      } else {
        console.error(error);
      }
    }

    const dispatcher = queue.connection
      .play(stream, { type: "opus" })
      .on("finish", () => {
        if (queue.loop) {
          let lastsong = queue.songs.shift();
          queue.songs.push(lastsong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", console.error);
  
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME
embed.setAuthor("Started Playing Song", bot.user.displayAvatarURL())
    .setDescription(`**[${song.title}](${song.url})**`)
    
    queue.textChannel
      .send(embed)
      .catch(err => message.channel.send("UNABLE TO PLAY SONG"));
  }
};
