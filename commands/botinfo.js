const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed() //Embed message
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(boticon)
    .addField("Bot Name", bot.user.username) //shows the bot's username
    .addField("Date Created", bot.user.createdAt);


    return message.channel.send(botembed); //send it
}


module.exports.help = {
    name : "botinfo"
}
