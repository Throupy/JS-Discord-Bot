const Discord = require("discord.js")
let coins = require("../coins.json")
module.exports.run = async (bot, message, args) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let argsUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (argsUser) {
        if(!coins[argsUser.id]){
            coins[argsUser.id] = {
                coins:0
            };
        }
    } else {
        message.channel.send("Specify a user")
    }
    if (getRandomInt(10) == 1) {
        let userCoins = coins[message.author.id].coins;
        let victimCoins = coins[argsUser.id].coins;
        let five_perc = Math.round(victimCoins / 20);
        coins[argsUser.id].coins = coins[argsUser.id].coins - five_perc;
        coins[message.author.id].coins = coins[message.author.id].coins + five_perc
        robbedEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#00ff00")
        .addField(":gun:","You robbed " + argsUser.user.username + " For 5% of their coins! ("+five_perc+")")
        .addField("Chance","1/10")
        return message.channel.send(robbedEmbed);
    } else {
        caughtEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#ff0000")
        .addField(":gun:","You were robbing " + argsUser.user.username + " and got caught by the police and you lose 2% ("+coins[message.author.id].coins / 50+") of your coins!")
        .addField("Chance","9/10")
        return message.channel.send(caughtEmbed);
    }
}


module.exports.help = {
    name : "rob"
}
