const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  name: "reddit",
  description: "Get a meme!",
  category: "fun",
  run: async (bot, message, args) => {
    let subreddit = args.slice(0).join(" ")
    if(!subreddit){
return message.channel.send(`No subreddit found!`)
}
    
      if(subreddit === 'simp'){
return message.channel.send('This subreddit is blacklisted due to it being nsfw!')
}
   
    
    if(subreddit === 'dick'){
return message.channel.send('This subreddit is blacklisted due to it being nsfw!')
}
      if(subreddit === 'ass'){
return message.channel.send('This subreddit is blacklisted due to it being nsfw!')
}
      if(subreddit === 'hoe'){
return message.channel.send('This subreddit is blacklisted due to it being nsfw!')
}
      if(subreddit === 'bitch'){
return message.channel.send('This subreddit is blacklisted due to it being nsfw!')
}
      if(subreddit === 'pussy'){
return message.channel.send('This subreddit is blacklisted due to it being nsfw!')
}
   
     if(subreddit === 'penis'){
return message.channel.send('This subreddit is blacklisted due to it being nsfw!')
}
     if(subreddit === 'vagina'){
return message.channel.send('This subreddit is blacklisted due to it being nsfw!')
}
      if(subreddit === 'thirsty'){
return message.channel.send('This subreddit is blacklisted due to it being nsfw!')
}
   
   
   
   
    let img = await api(subreddit, true);
    const Embed = new MessageEmbed()
      .setTitle(`An image from r/${subreddit}`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed);
  },
};
