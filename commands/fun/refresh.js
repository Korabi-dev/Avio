module.exports = {
    name: "shutdown",
  aliases: ["crash"],
    category: "owner",
    run: async (client, message, args) => {
         if (message.author.id !== '638476135457357849')
      return message.channel.send(
        `You do not have premissions to use this command, ${message.author.username} you are not a developer!`
      );
        console.log(`Shutting down...`)
        await message.channel.send(`Shutting down!`)
        process.exit();
    }
}
