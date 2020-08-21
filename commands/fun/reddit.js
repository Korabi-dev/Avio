const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
  name: "reddit",
  description: "Get a meme!",
  category: "fun",
  run: async (bot, message, args) => {
    let subreddit = args.slice(0).join(" ")
    if(!subreddit){
return message.channel.send(`No subreddit found/invalid subreddit!`)
}

    if(!message.channel.nsfw) {
    
      if(subreddit === 'sex'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
   
    
      if(subreddit === 'virgin'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
         if(subreddit === 'cock'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
    
      if(subreddit === 'simp'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
         if(subreddit === 'fuck'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
    
    if(subreddit === 'dick'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
      if(subreddit === 'ass'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
      if(subreddit === 'hoe'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
      if(subreddit === 'bitch'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
      if(subreddit === 'pussy'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
   
     if(subreddit === 'penis'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
     if(subreddit === 'vagina'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
      if(subreddit === 'thirsty'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
   
     if(subreddit === 'anal'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
         if(subreddit === 'bitch'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
          if(subreddit === 'hentai'){
return message.channel.send('This reddit is nsfw please use it in a nsfw channel!')
}
   
    }
    
    let img = await api(subreddit, true);
    const Embed = new MessageEmbed()
      .setTitle(`An image from r/${subreddit}`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img);
    message.channel.send(Embed)
    
    
    
    
       },
};
