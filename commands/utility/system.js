const ytdlDiscord = require("ytdl-core-discord");
const { MessageEmbed } = require("discord.js")
const { QUEUE_LIMIT, COLOR } = require("../../config.json");
const discord = require("discord.js")
const client = new discord.Client();

module.exports = {
  async play(song, message) {
    try {
    client.queue = new Map();
    client.vote = new Map();
    const queue = message.client.queue.get(message.guild.id);
    queue.loop = true;
let embed = new MessageEmbed()
.setColor(COLOR);

    if (!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id);
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
        queue.channel.leave();
          message.channel.send(`Song finished!`)
        }) 
     .on("error", console.error);
  
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME
embed.setAuthor("Started Playing Song", message.client.user.displayAvatarURL())
    .setDescription(`**[${song.title}](${song.url})**`)
      .setImage(song.thumbnail({size: 2056}) )
    
    queue.textChannel
      .send(embed)
      .catch(err => message.channel.send("UNABLE TO PLAY SONG"));
    } catch (e) {
      message.channel.send(`Oops: ${e}`)
}
  }
};
