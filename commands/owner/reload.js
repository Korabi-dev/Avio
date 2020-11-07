module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	owneronly: true,
	run: async(bot, message, args) => {
		const commandName = args[0].toLowerCase();
		const command = bot.commands.get(commandName)
			|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			return message.channel.send(`:x: || Command/Alias \`${commandName}\` was not found!`);
		}

		delete require.cache[require.resolve(`./${command.name}.js`)];

		try {
			const newCommand = require(`./${command.name}.js`);
			bot.commands.set(newCommand.name, newCommand);
			message.channel.send(`:tools: | The Command \`${commandName}\` Was Reloaded `);
		} catch (error) {
			console.error(error);
			message.channel.send(`:x: | There was an error while reloading the command \`${command.name}\`:\n\`${error}\``);
		}
	},
};