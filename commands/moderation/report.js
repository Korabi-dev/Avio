const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "report",
  category: "moderation",
  description: "Report a user of your choice!",
  usage: "<User mention>",
  run: async (bot, message, args) => {
    
    if(message.author.id === '356324345783648257') {
return message.channel.send('You have been blacklisted from this command!')
}
    
    let User = message.mentions.users.first() || null;

    if(User.id === message.author.id){
return message.channel.send(`You cannot report yourself!`)
}
    
    if (User == null) {
      return message.channel.send(`You did not mention a user!`);
    } else {
      let Reason = message.content.slice(bot.prefix.length + 22 + 7) || null;
      if (Reason == null) {
        return message.channel.send(
          `You did not specify a reason for the report!`
        );
      }
      let Avatar = User.displayAvatarURL();
      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "reports"
      );
      if (!Channel)
        return message.channel.send(
          `There is no channel in this guild which is called \`reports\``
        );
      let Embed = new MessageEmbed()
        .setTitle(`New report!`)
        .setDescription(
          `The Member \`${message.author.tag}\` has reported the user \`${User.tag}\`! `
        )
        .setColor(`RED`)
        .setThumbnail(Avatar)
        .addFields(
          { name: "Member ID", value: `${message.author.id}`, inline: true },
          { name: "Member Tag", value: `${message.author.tag}`, inline: true },
          { name: "Reported ID", value: `${User.id}`, inline: true },
          { name: "Reported Tag", value: `${User.tag}`, inline: true },
          { name: "Reason", value: `\`${Reason.slice(1)}\``, inline: true },
          {
            name: "Date (M/D/Y)",
            value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
            inline: true,
          }
        );
      Channel.send(Embed);
      
   
      
      message.channel.send('Report recorded!')
    }
  },
};
