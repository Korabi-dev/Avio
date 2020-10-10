const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'role',
    run: async(bot, message, args) => {

        message.delete();

        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`You do not have MANAGE_ROLES permission`).then(m => m.delete({ timeout: 5000 }));

        if (!args[0] || !args[1]) return message.channel.send("Incorrect usage, It's `<username or user id> <role name or role id>").then(m => m.delete({ timeout: 5000 }))

        try {

             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
             const roleName = message.guild.roles.cache.find(r => (r.name === args[1].toString()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));
          
          let embed = new MessageEmbed()
                 .setTitle(`Role Name: ${roleName.name}`)
                 .setDescription(`${message.author} has successfully removed the role ${roleName} from ${member.user}`)
                 .setColor('f3f3f3')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setFooter(new Date().toLocaleString())

             const alreadyHasRole = member._roles.includes(roleName.id);

             if (alreadyHasRole){
return member.roles.remove(roleName).then(() => message.channel.send(embed));
}

        
   
              let embed2 = new MessageEmbed()
                 .setTitle(`Role Name: ${roleName.name}`)
                 .setDescription(`${message.author} has successfully given the role ${roleName} to ${member.user}`)
                 .setColor('f3f3f3')
                 .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
                 .setFooter(new Date().toLocaleString())
            
            
          

            return member.roles.add(roleName).then(() => message.channel.send(embed2));
        } catch (e) {
            return message.channel.send('Try to give a role that exists next time...').then(m => m.delete({ timeout: 5000 })).then(() => console.log(e))
        }
    }
}
