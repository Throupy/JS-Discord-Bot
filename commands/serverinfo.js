const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    let servericon = message.guild.iconURL; //get the guild from the message sent
    let createdat = message.guild.createdAt.toString().split(" ").slice(1,5).join(" ");
    let joinedat = message.member.joinedAt.toString().split(" ").slice(1,5).join(" ");
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setThumbnail(servericon)
    .addField("Server Name", message.guild.name)
    .addField("Date Created", createdat)
    .addField("You Joined", joinedat)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send({embed: {
        color: 155153,
        author: {
            //name:client.user.username,
            //icon_url:client.user.avatarURL
        },
        title:"Gucci Embed!",
        url:"http://logiccore.xyz",
        description:"Gucci coffee and gucci development everyone!",
        fields: [{
            name:"Fields",
            value:"Each field has it's own level of gucciness"
        },{
            name:"Date Created",
            value: message.guild.createdAt.toString().split(" ").slice(1,5).join(" ")
        }],
        timestamp: new Date(),
        footer: {
            //icon_url: client.user.avatarURL,
            text: "© Yeet"
        }

        }});
}


module.exports.help = {
    name : "serverinfo"
}
