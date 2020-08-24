const discord = require("discord.js");

module.exports = {
  name: "kill",
  category: "fun",
  description: "Kill someone!",
  usage: "kill <@user>",
  run: (client, message, args) => {
let target = message.mentions.users.first();

    if(!target) {
        return message.channel.send(`**${message.author.username}**, Please mention the person who you want to kill`)

    }
    
    let responses = [
        "oops you missed and got killed by ${target.user.username}",
        "${target.user.username} is now dead you stabbed them in the heart!",
        "you forgot who your target was -_-",
        "damn you missed, it was close though but you died as ${target.user.username} shot you!",
         ];

    if(target.id === message.author.id) {
        return message.channel.send(`suicide is never the answer ${message.author.username}`);
      }

     let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
    
  message.channel.send(`${response}`) 
}}
