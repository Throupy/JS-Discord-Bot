const botconfig = require("./botconfig.json") //Get the bot config file
const Discord = require("discord.js") //Get the discord library
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const bot = new Discord.Client({disableEveryone:true});
const fs = require("fs")
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js") //get file name
    if(jsfile.length <= 0) { //If there's no command in the commands folder
        console.log("Couldn't find commands!");
        return;
    }
    jsfile.forEach((f, i) => { //f = files
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`); //Give a console message saying the bot in online
    bot.user.setPresence({
        game: {
            name:"Big Sexy MILF Eat Cock",
            type:"Watching"
        },
        status:"online"
    });
});


bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;

    let prefix = botconfig.prefix; //Let means only accessible in this scope
    let messageArray = message.content.split(" "); //Split what they say
    let cmd = messageArray[0]; //Get the first word, the command.
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length)) //get the file from commands
    if (commandfile) commandfile.run(bot, message, args) //if the commandfile exists
})

bot.login(botconfig.token); //Log the bot in using the token in botconfig.sjon
