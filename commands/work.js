const Discord = require("discord.js")
let coins = require("../coins.json")
const fs = require("fs")
const workedRecently = new Set();
module.exports.run = async (bot, message, args) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    if (workedRecently.has(message.author.id)) {
        message.channel.send("Wait 10 seconds before getting typing this again. - " + message.author.username);
    } else {
        workedRecently.add(message.author.id);
        setTimeout(() => {
            workedRecently.delete(message.author.id);
        }, 10000);
        if (getRandomInt(100) == 1) {
            userCoins = coins[message.author.id].coins;
            ten_perc = Math.round(userCoins / 10);
            newAmt = userCoins - ten_perc
            coins[message.author.id].coins = newAmt
            clippedEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#ff0000")
            .addField(":gun:","You were working and you got clipped and lost 10% of your coins")
            .addField("Chance","1/100")
            return message.channel.send(clippedEmbed);
        } else {
            toAdd = getRandomInt(29) + 1;
            coins[message.author.id].coins = coins[message.author.id].coins + toAdd;
            workEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#00ff00")
            .addField(":moneybag:","The court road bakery salary comes rolling in, +" + toAdd.toString() + "coins" )
            .addField("Chance","99/100")
            return message.channel.send(workEmbed);
        }
    }
}


module.exports.help = {
    name : "work"
}
