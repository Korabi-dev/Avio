const Discord = require('discord.js')
const fetch = require('node-fetch');
 
module.exports = {
    name: 'instagram',
    aliases: ['insta'],
    run: async(message, args) => {
        const Name = args.join(' ');
        if(!Name){
            return message.channel.send('It would Help Me if You would mention a User Name...')
        }
        const url = `https://instagram.com/${Name}/?__a=1`
        let result;

        try {
            result = await fetch(url).then(url => url.json());
        } catch (error) {
            return message.channel.send(`Please provide a username that is vaid!`)
        }
 
        const theInfo = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(result.graphql.user.profile_pic_url_hd)
        .setTitle(`Instagram Account Info`)
        .setURL(result.graphql.user.external_url_linkshimmed)
        .addField('**Username**', `${result.graphql.user.username}`)
        .addField(`**Bio**`, `${result.graphql.user.biography}`)
        .addField(`**Number Of Posts**`, `${result.graphql.user.edge_owner_to_timeline_media.count}`)
        .addField(`**Number of Followers**`, `${result.graphql.user.edge_followed_by.count}`)
        .addField(`**Following**`, `${result.graphql.user.edge_follow.count}`)
        .addField(`**Type of Account**`, `${result.graphql.user.is_private ? "Private" : "Public"}`);
 
        message.channel.send(theInfo);
    }
}