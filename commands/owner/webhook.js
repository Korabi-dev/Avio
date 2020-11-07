const discord = require("discord.js")


module.exports = {
    name: "hooktest",
    owneronly: true,
    category: "owner",
    run: async (bot, message, args) => {
        

        const embed = new discord.MessageEmbed()
    .setTitle('Avio')
    .setDescription(`Wow my dear dev is using webhooks now huh thats sad.`)
	.setColor('#0099ff');
        try {
            const webhooks = await message.channel.fetchWebhooks();
            const webhook = webhooks.first();
    
            await webhook.send(' ', {
                username: 'Avio/Discord.js test',
                avatarURL: 'https://i.imgur.com/wSTFkRM.png',
                embeds: [embed],
                });
        } catch (error) {
            const embed2 = new discord.MessageEmbed()
            .setTitle('ERROR')
            .setDescription(`Could not find a webhook in this channel make sure you create a webhook before using this command!`)
            .setImage('https://i.imgur.com/WAkeMYR.png')
            .setColor('RED');
            message.channel.send(embed2)
         
        }



}
}