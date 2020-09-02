const discord = require("discord.js")
const client = new discord.Client();

module.exports = {
    name: "hooktest",
    category: "owner",
    run: async (client, message, args) => {
        

        const embed = new discord.MessageEmbed()
    .setTitle('Avio')
    .setDescription(`Wow dear dev,you are using webhooks now huh thats sad.`)
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
            const embed = new discord.MessageEmbed()
            .setTitle('ERROR')
            .setDescription(`Could not find a webhook in this channel make sure you create a webhook before using this command!`)
            .setImage('https://i.imgur.com/WAkeMYR.png')
            .setColor('RED');
         
        }



}
}