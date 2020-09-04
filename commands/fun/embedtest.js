const Discord = require('discord.js')
const client = new Discord.Client();

var embed = new Discord.MessageEmbed()

const userEmbed = new Discord.MessageEmbed()

module.exports = {
    name: 'customembed',
    description: "Custom embed say command",
    run: async(message, args) =>{
        embed.setColor('#7289da')
        embed.setTitle("Lets setup your embed message!");
        embed.setFooter("Enter 'skip' for any question to leave that element out or 'quit' to stop creating your embed message")
        embed.setDescription("1. Enter the channel you would like the bot to send this message in");
        message.channel.send(embed);
        let filter = m => m.author.id === message.author.id;
        let collector = new Discord.MessageCollector(message.channel, filter, 10);
        let destination = message.mentions.channels.first();
        let count = 0;
        collector.on('collect', (message, collector) =>{
            if (message.content == "quit"){
                collector.stop();
                const quitEmbed = new Discord.MessageEmbed()
                quitEmbed.setDescription("I have stopped making your embed message");
                quitEmbed.setColor(`#ff0033`);
                return message.channel.send(quitEmbed);
            }
            else {
                count++;
                if (count == 1){
                    embed.setDescription("2. Enter the title")
                    message.channel.send(embed);
                    userEmbed.setTitle(message.content);
                }
                if (count == 2){
                    embed.setDescription("3. Enter the URL of your title")
                    message.channel.send(embed);
                    userEmbed.setURL(message.content);
                }
                if (count == 3){
                    embed.setDescription("4. Enter the author")
                    message.channel.send(embed);
                    userEmbed.setAuthor(message.content);
                }
                if (count == 4){
                    embed.setDescription("5. Enter the description")
                    message.channel.send(embed);
                    userEmbed.setDescription(message.content);
                }
                if (count == 5){
                    embed.setDescription("6. Enter the thumbnail (link)")
                    message.channel.send(embed);
                    userEmbed.setThumbnail(message.content);
                }
                if (count == 6){
                    embed.setDescription("7. Enter the image you would like attached")
                    message.channel.send(embed);
                    userEmbed.setImage(messsage.content);
                }
                if (count == 7){
                    embed.setDescription("8. Enter the footer")
                    message.channel.send(embed);
                    userEmbed.setImage(message.content);
                }
                console.log("Collected message: " + message.content)
                
                    destination.send(userEmbed)
            }            
        });
    }
}