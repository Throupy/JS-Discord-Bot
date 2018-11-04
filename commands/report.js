const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    let reported_user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])) //Get the user they're reported
    if (!reported_user) return message.channel.send("Couldn't find user"); //If it's null
    let reason = args.join(" ").slice(22); //EACH DISCORD ID IS 22 CHARS SO SLICE 22
    if (!reason) return message.channel.send("You must specify a reason!")

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("ff0000")
    .addField("Report User", `${reported_user} with ID: ${reported_user.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reason);
    let reportschannel = message.guild.channels.find(`name`, "reports");
    if (!reportschannel) return message.channel.send("Couldn't find reports channel!");

    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
    return message.channel.send("Report sent!");
}


module.exports.help = {
    name : "report"
}
