module.exports = {
    name: "refresh",
  aliases: ["restart", "reboot", "reload", "off/on", "devrefresh"],
    category: "owner",
    run: async (client, message, args) => {
         if (message.author.id !== '638476135457357849')
      return message.channel.send(
        `You do not have premissions to use this command, ${message.author.username} you are not a developer!`
      );
        console.log(`Refreshing...`)
        await message.channel.send(`Refreshing!`)
        process.exit();
    }
}
