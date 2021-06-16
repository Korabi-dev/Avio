
module.exports = {
  name: "test",
  description: "test",
  category: "test",
  run: async (bot, message, args) => {
    message.noMentionReply('Hey')
  },
};
