module.exports = {
  name: "docs",
  description: "Search the D.JS Docs!",
  category: "fun",
  run: async (bot, message, args) => {
    const fetch = require("node-fetch");
    const query = args.join(" ");
    const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
      query
    )}`;
    fetch(url)
      .then((res) => res.json())
      .then((embed) => {
        if (embed && !embed.error) {
          message.channel.send({ embed });
        } else {
          message.reply(
            `I don't know mate, but "${query}" doesn't make any sense!`
          );
        }
      })
      .catch((e) => {
        message.reply("Darn it! I failed!");
      });
  },
};
