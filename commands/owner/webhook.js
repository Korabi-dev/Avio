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
    
            await webhook.send(`${embed}`, {
                username: 'Avio/Discord.js test',
                avatarURL: 'https://i.imgur.com/wSTFkRM.png',
                });
        } catch (error) {
            console.error('Error trying to send: ', error);
        }



}
}