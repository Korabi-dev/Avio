const ascii = require('ascii-table')
let table = new ascii("Commands");
table.setHeading('Command', 'Status');
module.exports = {
    name: "cmdstatus",
    category: "info",
    description: "Get the stats of my commands",
    usage: "<cmdstatus>",
    run: async (bot, message, args) => {
        var command = bot.commands.map(c => table.addRow(c.name,'Working! ✅'))
       ctx(table.toString()) 
    }
}