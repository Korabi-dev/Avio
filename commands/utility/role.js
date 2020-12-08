const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'role',
    description: "give someone a role in the guild!",
    run: async(bot, message, args) => {
        if (message.member.hasPermission('MANAGE_ROLES') || bot.owners.includes(message.author.id)){
        message.delete();

       

        if (!args[0] || !args[1]) return message.channel.send("Incorrect usage, It's `<mention id or user tag> <role name or role id>").then(m => m.delete({ timeout: 5000 }))

        try {


             const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => (m.tag === args[0]));
             const roleName = message.guild.roles.cache.find(r => (r.name.toLowerCase() === args[1].toLowerCase()) || (r.id === args[1].toString().replace(/[^\w\s]/gi, '')));

             if(member.roles.highest.position > message.member.roles.highest.position && message.author.id !== message.guild.owner.id){
                const embed = new MessageEmbed();
                embed.setTitle("Error");
                embed.setDescription("This user has a higher role then you therefor i cannot add/remove fromes to/from them.");
                embed.setColor("RED");
                return message.channel.send(embed)
            }

            if(member.roles.highest.position > message.guild.me.roles.highest.position && message.author.id !== message.guild.owner.id){
                const embed = new MessageEmbed();
                embed.setTitle("Error");
                embed.setDescription("This user has a higher role then me therefor i cannot add/remove fromes to/from themk.");
                embed.setColor("RED");
                return message.channel.send(embed)
            }

if(roleName.size > 1){
    return ctx(`Looks like there are ${roleName.size} roles that countain "${args[1]} in their name please either specify the full name of the role or use an id.`)
}
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
    } else {
        return ctx(":x: | You don't have permission to use this command.")
    }
    }
}
