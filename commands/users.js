const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    var https = require('http');
    var url = "http://logiccore.xyz/get_data";
    https.get(url, (resp) => {
        let data = ' '
        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            let parsed = JSON.parse(data);
            var i;
            for (i=0; i<Object.keys(parsed).length;i++) {
            message.channel.send({embed: {
                color: 155153,
                title:"Click here to see the user's posts!",
                description:"User ID: "+parsed.posts[i].id,
                author:{
                    name:message.member.user.username,
                    icon_url:message.member.user.avatarURL
                },
                thumbnail:{
                    url:message.member.user.avatarURL
                },
                url:"http://logiccore.xyz/user/" + parsed.users[i].username.toString() + "/posts",
                fields: [{
                    name:"Username",
                    value:parsed.users[i].username,
                    "inline": true
                },{
                    name:"Email",
                    value:parsed.users[i].email,
                    "inline": true
                }],
                timestamp: new Date(),
                footer: {
                    //icon_url: client.user.avatarURL,
                    text: "© Yeet"
                }

                }});
            }
        });

    }).on("error", (err) => {
        return message.channel.send("ERROR", err);
    });
}


module.exports.help = {
    name : "users"
}
