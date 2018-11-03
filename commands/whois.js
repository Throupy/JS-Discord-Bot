const Discord = require("discord.js")






module.exports.run = async (bot, message, args) => {
    mention = message.mentions.users.first() //look for mentions in the message
    if(mention==null){
        return message.channel.send({embed: {
            color: 3447003,
            description: "No user found with that name!"
        }})
    }
    let member = message.mentions.members.first();
    let date = new Date(member.joinedAt)
    let date_formatted = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear()
    let all_roles = message.guild.roles.map((u) => {return u.name});
    let member_roles = []
    for (var x in all_roles) {
        let role = member.guild.roles.find("name", all_roles[x])
        if (member.roles.has(role.id)) {
            member_roles.push(role)
        }
    }
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: member.displayName,
          icon_url: member.user.avatarURL
        },
        thumbnail:{
            url:member.user.avatarURL
        },
        fields:[{
            name:"__**Roles**__",
            value:member_roles.toString().split(",").slice(1,4).join("-") + "\n" //Remove first because it's @everyone
        },{
            name:"__**Information**__",
            value:"**`Server Muted: `**"+member.serverMute+
            "\n**`Server Deafened: `**"+member.serverMute+
            "\n**`Joined On: `**"+date_formatted,
            "inline":true
        },{
            name:"__**Status**__",
            value:
            "**`Current Status: `**"+member.presence.status+
            "\n**`Voice Channel: `**"+member.voiceChannel+
            "\n**`User ID: `**"+member.id,
            "inline":true
        }],
        description: "<@"+member.id+">",
        timestamp: new Date(),
        footer: {
          //icon_url: client.user.avatarURL,
          text: "© Throuper Trooper"
        }
      }
    }); //End embed
}

module.exports.help = {
    name : "whois"
}
