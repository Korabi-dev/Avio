const { MessageEmbed } = require("discord.js");
module.exports = async (oldMessage, newMessage) => {
  try {
    let embed = new MessageEmbed()
      .setTitle(`New message edited`)
      .setColor(`GREEN`)
      .setDescription(
        `**The user ${oldMessage.author.tag} has edited a message in <#${oldMessage.channel.id}>**`
      )
      .addField(`Old Content`, oldMessage.content, true)
      .addField(`New Content`, newMessage.content, true);
    let channel = oldMessage.guild.channels.cache.find(
      (ch) => ch.name === "edit-log"
    );
    if (!channel) {
return oldMessage.channel.send(`Hey i've just noticed **${oldMessage.author.username}** edited a message to view the old content you need to make a channel called \`edit-log\` so i can log the message  there next time!`)
}
    channel.send(embed);
  } catch (e) {}
};
