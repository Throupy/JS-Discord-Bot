const Discord = require("discord.js")
let coins = require("../coins.json")
module.exports.run = async (bot, message, args) => {
    if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins:0
        };
    }
    let userCoins = coins[message.author.id].coins;
    let argsUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (argsUser) {
        if(!coins[argsUser.id]){
            coins[argsUser.id] = {
                coins:0
            };
        }
        let coinEmbed = new Discord.RichEmbed()
        .setAuthor(argsUser.user.username)
        .setColor("#ffffff")
        .addField(":moneybag:", coins[argsUser.id].coins);
        return message.channel.send(coinEmbed).then(msg => {msg.delete(5000)})
    };
    let coinEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#ffffff")
    .addField(":moneybag:", userCoins)
    message.channel.send(coinEmbed).then(msg => {msg.delete(5000)})
}


module.exports.help = {
    name : "coins"
}
