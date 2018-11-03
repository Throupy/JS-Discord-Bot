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
            var days = {'Mon,':0,'Tue,':1,'Wed,':2,'Thu,':3,'Fri,':4,'Sat,':5,'Sun,':6}
            for (i=0; i<Object.keys(parsed).length;i++) {
            //var d = new Date(parsed.posts[i].date_posted).toString().split("T").slice(1,5).join(" ");
            var date = new Date(parsed.posts[i].date_posted.toString())
            var date_formatted = date.getDate() + '-' + (date.getMonth()+1) + '-' + date.getFullYear()
            message.channel.send({embed: {
                color: 155153,
                title:"Click here to see the full post!",
                description:"Post ID: "+parsed.posts[i].id,
                author:{
                    name:message.member.user.username,
                    icon_url:message.member.user.avatarURL
                },
                thumbnail:{
                    url:message.member.user.avatarURL
                },
                url:"http://logiccore.xyz/post/" + parsed.posts[i].id.toString(),
                fields: [{
                    name:"Title",
                    value:parsed.posts[i].title,
                    "inline": true
                },{
                    name:"Date Posted",
                    value:date_formatted,
                    "inline": true
                },{
                    name:"Contents",
                    value:parsed.posts[i].content,
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
    name : "posts"
}
