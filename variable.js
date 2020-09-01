const Timers = new Map();
const discord = require('discord.js');
const client = new discord.Client();
client.queue = new Map();
 client.vote = new Map();
module.exports = { Timers: Timers };
