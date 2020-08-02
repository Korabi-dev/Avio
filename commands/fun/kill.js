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

    if(target === message.author.id) {
        return message.channel.send(`suicide is never the answer ${message.author.username}`);
      }

  message.channel.send(`${message.author.username} kills ${target} with 120 knives to the heart and ${target} did not have a chance of surviving `) 
}}