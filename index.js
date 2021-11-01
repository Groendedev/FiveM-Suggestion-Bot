const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
const config = require('./config.json');
const lang = require('./lang.json');

// Suggestion General ------------------------------------------------------------------
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel == config.suggestionChannel) {
        message.delete();
        const messageArray = message.content.split(' ');
        let args = messageArray.slice(1);
        let args2 = messageArray.slice(2);
        const args3 = messageArray.slice(3);
        const args31 = args3.join();
        const note = args31.replace(/,/g, " ");
        if(messageArray[0] == config.prefix.members  + "suggestion") {
            if(!args[0]) {
                if(messageArray[0] !== config.prefix.admin + "suggestion") {};
            } else {
                const embedSuggestion = new Discord.MessageEmbed()
                    .setTimestamp(message.author.avatarURL())
                    .setColor(lang.suggestioncolor)
                    .setTitle(lang.suggestion + " - " + message.author.tag)
                    .setDescription(args.join(" "))
                    .setFooter(lang.footer)
                    .setThumbnail(message.author.avatarURL())
                const messageSuggestion = await message.channel.send(embedSuggestion);
                    messageSuggestion.react("👍");
                    messageSuggestion.react("👎");
            };
        } else {
            if(messageArray[0] == config.prefix.admin + "suggestion") {
            } else {
                const embedSuggestion = new Discord.MessageEmbed()
                .setTimestamp(message.author.avatarURL())
                .setColor(lang.suggestioncolor)
                .setTitle(lang.suggestion + " - " + message.author.tag)
                .setDescription(message)
                .setFooter(lang.footer)
                .setThumbnail(message.author.avatarURL())
            const messageSuggestion = await message.channel.send(embedSuggestion);
                messageSuggestion.react("👍");
                messageSuggestion.react("👎");
        };
        };
        if(messageArray[0] == config.prefix.admin + "suggestion") {
            if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
                if(args[0] == "deny") {
                    if(!args2[0]) {
                        message.author.createDM().then(channel => {
                            const embedSuggestionError1 = new Discord.MessageEmbed()
                                .setColor("RED")
                                .setDescription(
                                    "Please enter the id of the message you want denied or approved !"
                                )
                            channel.send(embedSuggestionError1);
                        });
                    } else {
                        if(args3 == ""){
                            message.channel.messages.fetch({around: args2[0], limit: "1"})
                            .then(msg => {
                            var embed = msg.first().embeds[0];
                            const embedDenied = new Discord.MessageEmbed()
                                .setTitle(lang.denied + " " + embed.title)
                                .setDescription(embed.description)
                                .setThumbnail(embed.thumbnail.url)
                                .setColor("RED")
                                .setFooter(lang.deniedsuggestion + " " + message.author.tag)
                                .addField(lang.notebystaff, lang.noexplantion, false);
                            const fetchedMsg = msg.first();
                            fetchedMsg.edit(embedDenied);
                            msg.first().reactions.removeAll();
                        });
                        } else {
                            message.channel.messages.fetch({around: args2[0], limit: "1"})
                                .then(msg => {
                                var embed = msg.first().embeds[0];
                                const embedDenied = new Discord.MessageEmbed()
                                    .setTitle(lang.denied + " " + embed.title)
                                    .setDescription(embed.description)
                                    .setThumbnail(embed.thumbnail.url)
                                    .setColor("RED")
                                    .setFooter(lang.deniedsuggestion + " " + message.author.tag)
                                    .addField(lang.notebystaff, note, false);
                                const fetchedMsg = msg.first();
                                fetchedMsg.edit(embedDenied);
                                msg.first().reactions.removeAll();
                            });
                        };
                    };
                } else {
                    if(args[0] == "accept") {
                        if(!args2[0]) {
                            message.author.createDM().then(channel => {
                                const embedSuggestionError1 = new Discord.MessageEmbed()
                                    .setColor("RED")
                                    .setDescription(
                                        "Please enter the id of the message you want denied or approved !"
                                    )
                                channel.send(embedSuggestionError1);
                            });
                        } else {
                            if(args3 == ""){
                                message.channel.messages.fetch({around: args2[0], limit: "1"})
                                .then(msg => {
                                var embed = msg.first().embeds[0];
                                if(embed.thumbnail.url = null){
                                    const embedApproved = new Discord.MessageEmbed()
                                        .setTitle(lang.approved + " " + embed.title)
                                        .setDescription(embed.description)
                                        .setColor("GREEN")
                                        .setFooter("suggestion approved by " + message.author.tag)
                                        .addField(lang.notebystaff, lang.noexplantion, false);
                                    const fetchedMsg = msg.first();
                                    fetchedMsg.edit(embedApproved);
                                    msg.first().reactions.removeAll();
                                } else {   
                                     const embedApproved = new Discord.MessageEmbed()
                                         .setTitle(lang.approved + " " + embed.title)
                                         .setDescription(embed.description)
                                         .setThumbnail(embed.thumbnail.url)
                                         .setColor("GREEN")
                                         .setFooter("suggestion approved by " + message.author.tag)
                                         .addField(lang.notebystaff, lang.noexplantion, false);
                                     const fetchedMsg = msg.first();
                                     fetchedMsg.edit(embedApproved);
                                     msg.first().reactions.removeAll();
                                };
                            });
                            } else {
                                    message.channel.messages.fetch({around: args2[0], limit: "1"})
                                        .then(msg => {
                                        var embed = msg.first().embeds[0];
                                        const embedApproved = new Discord.MessageEmbed()
                                            .setTitle(lang.approved + " " + embed.title)
                                            .setDescription(embed.description)
                                            .setThumbnail(embed.thumbnail.url)
                                            .setColor("GREEN")
                                            .setFooter(lang.approved + " " + message.author.tag)
                                            .addField(lang.notebystaff, note, false);
                                        const fetchedMsg = msg.first();
                                        fetchedMsg.edit(embedApproved);
                                        msg.first().reactions.removeAll();  
                                     });
                            };
                        };
                  } else {
                        if(args[0] == "neutral") {
                            if(!args2[0]) {
                                message.author.createDM().then(channel => {
                                    const embedSuggestionError1 = new Discord.MessageEmbed()
                                        .setColor("RED")
                                        .setDescription(
                                            "Please enter the id of the message you want denied or approved !"
                                        )
                                    channel.send(embedSuggestionError1);
                                });
                            } else {
                                if(args3 == ""){
                                    message.channel.messages.fetch({around: args2[0], limit: "1"})
                                    .then(msg => {
                                    var embed = msg.first().embeds[0];
                                    if(embed.thumbnail.url = null){
                                        const embedApproved = new Discord.MessageEmbed()
                                            .setTitle(lang.neutral + " " + embed.title)
                                            .setDescription(embed.description)
                                            .setColor("ORANGE")
                                            .setFooter("suggestion response by " + message.author.tag)
                                            .addField(lang.notebystaff, lang.noexplantion, false);
                                        const fetchedMsg = msg.first();
                                        fetchedMsg.edit(embedApproved);
                                        msg.first().reactions.removeAll();
                                    } else {   
                                         const embedApproved = new Discord.MessageEmbed()
                                             .setTitle(lang.neutral + " " + embed.title)
                                             .setDescription(embed.description)
                                             .setThumbnail(embed.thumbnail.url)
                                             .setColor("ORANGE")
                                             .setFooter("suggestion response by " + message.author.tag)
                                             .addField(lang.notebystaff, lang.noexplantion, false);
                                         const fetchedMsg = msg.first();
                                         fetchedMsg.edit(embedApproved);
                                         msg.first().reactions.removeAll();
                                    };
                                });
                                } else {
                                        message.channel.messages.fetch({around: args2[0], limit: "1"})
                                            .then(msg => {
                                            var embed = msg.first().embeds[0];
                                            const embedApproved = new Discord.MessageEmbed()
                                                .setTitle(lang.approved + " " + embed.title)
                                                .setDescription(embed.description)
                                                .setThumbnail(embed.thumbnail.url)
                                                .setColor("ORANGE")
                                                .setFooter(lang.approved + " " + message.author.tag)
                                                .addField(lang.notebystaff, note, false);
                                            const fetchedMsg = msg.first();
                                            fetchedMsg.edit(embedApproved);
                                            msg.first().reactions.removeAll();  
                                         });
                                };
                            };
                        } else {
                        message.author.createDM().then(channel => {
                            const embedSuggestionError = new Discord.MessageEmbed()
                                .setColor("RED")
                                .setDescription(
                                    "Please specify if you want to approve or deny a suggestion !"
                                )
                            channel.send(embedSuggestionError);
                        });
                    };
                };
            };
        };
}});


// Suggestion Clothing -------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel == config.suggestionClothingChannel) {
        message.delete();
        const messageArray = message.content.split(' ');
        let args = messageArray.slice(1);
        let args2 = messageArray.slice(2);
        const args3 = messageArray.slice(3);
        const args31 = args3.join();
        const note = args31.replace(/,/g, " ");
        if(messageArray[0] == config.prefix.members  + "suggestion") {
            if(!args[0]) {
                if(messageArray[0] !== config.prefix.admin + "suggestion") {};
            } else {
                const embedSuggestion = new Discord.MessageEmbed()
                    .setTimestamp(message.author.avatarURL())
                    .setColor(lang.suggestioncolor)
                    .setTitle(lang.suggestion + " - " + message.author.tag)
                    .setDescription(args.join(" "))
                    .setFooter(lang.footer)
                    .setThumbnail(message.author.avatarURL())
                const messageSuggestion = await message.channel.send(embedSuggestion);
                    messageSuggestion.react("👍");
                    messageSuggestion.react("👎");
            };
        } else {
            if(messageArray[0] == config.prefix.admin + "suggestion") {
            } else {
                const embedSuggestion = new Discord.MessageEmbed()
                .setTimestamp(message.author.avatarURL())
                .setColor(lang.suggestioncolor)
                .setTitle(lang.suggestion + " - " + message.author.tag)
                .setDescription(message)
                .setFooter(lang.footer)
                .setThumbnail(message.author.avatarURL())
            const messageSuggestion = await message.channel.send(embedSuggestion);
                messageSuggestion.react("👍");
                messageSuggestion.react("👎");
        };
        };
        if(messageArray[0] == config.prefix.admin + "suggestion") {
            if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
                if(args[0] == "deny") {
                    if(!args2[0]) {
                        message.author.createDM().then(channel => {
                            const embedSuggestionError1 = new Discord.MessageEmbed()
                                .setColor("RED")
                                .setDescription(
                                    "Please enter the id of the message you want denied or approved !"
                                )
                            channel.send(embedSuggestionError1);
                        });
                    } else {
                        if(args3 == ""){
                            message.channel.messages.fetch({around: args2[0], limit: "1"})
                            .then(msg => {
                            var embed = msg.first().embeds[0];
                            const embedDenied = new Discord.MessageEmbed()
                                .setTitle(lang.denied + " " + embed.title)
                                .setDescription(embed.description)
                                .setThumbnail(embed.thumbnail.url)
                                .setColor("RED")
                                .setFooter(lang.deniedsuggestion + " " + message.author.tag)
                                .addField(lang.notebystaff, lang.noexplantion, false);
                            const fetchedMsg = msg.first();
                            fetchedMsg.edit(embedDenied);
                            msg.first().reactions.removeAll();
                        });
                        } else {
                            message.channel.messages.fetch({around: args2[0], limit: "1"})
                                .then(msg => {
                                var embed = msg.first().embeds[0];
                                const embedDenied = new Discord.MessageEmbed()
                                    .setTitle(lang.denied + " " + embed.title)
                                    .setDescription(embed.description)
                                    .setThumbnail(embed.thumbnail.url)
                                    .setColor("RED")
                                    .setFooter(lang.deniedsuggestion + " " + message.author.tag)
                                    .addField(lang.notebystaff, note, false);
                                const fetchedMsg = msg.first();
                                fetchedMsg.edit(embedDenied);
                                msg.first().reactions.removeAll();
                            });
                        };
                    };
                } else {
                    if(args[0] == "accept") {
                        if(!args2[0]) {
                            message.author.createDM().then(channel => {
                                const embedSuggestionError1 = new Discord.MessageEmbed()
                                    .setColor("RED")
                                    .setDescription(
                                        "Please enter the id of the message you want denied or approved !"
                                    )
                                channel.send(embedSuggestionError1);
                            });
                        } else {
                            if(args3 == ""){
                                message.channel.messages.fetch({around: args2[0], limit: "1"})
                                .then(msg => {
                                var embed = msg.first().embeds[0];
                                const embedApproved = new Discord.MessageEmbed()
                                    .setTitle(lang.approved + " " + embed.title)
                                    .setDescription(embed.description)
                                    .setThumbnail(embed.thumbnail.url)
                                    .setColor("GREEN")
                                    .setFooter("suggestion approved by " + message.author.tag)
                                    .addField(lang.notebystaff, lang.noexplantion, false);
                                const fetchedMsg = msg.first();
                                fetchedMsg.edit(embedApproved);
                                msg.first().reactions.removeAll();
                            });
                            } else {
                                message.channel.messages.fetch({around: args2[0], limit: "1"})
                                    .then(msg => {
                                    var embed = msg.first().embeds[0];
                                    const embedApproved = new Discord.MessageEmbed()
                                        .setTitle(lang.approved + " " + embed.title)
                                        .setDescription(embed.description)
                                        .setThumbnail(embed.thumbnail.url)
                                        .setColor("GREEN")
                                        .setFooter(lang.approved + " " + message.author.tag)
                                        .addField(lang.notebystaff, note, false);
                                    const fetchedMsg = msg.first();
                                    fetchedMsg.edit(embedApproved);
                                    msg.first().reactions.removeAll();
                                });
                            };
                        };
                    } else {
                        message.author.createDM().then(channel => {
                            const embedSuggestionError = new Discord.MessageEmbed()
                                .setColor("RED")
                                .setDescription(
                                    "Please specify if you want to approve or deny a suggestion !"
                                )
                            channel.send(embedSuggestionError);
                        });
                    };
                };
            };
        };
});

// Suggestion Cars -----------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel == config.suggestionCarsChannel) {
        message.delete();
        const messageArray = message.content.split(' ');
        let args = messageArray.slice(1);
        let args2 = messageArray.slice(2);
        const args3 = messageArray.slice(3);
        const args31 = args3.join();
        const note = args31.replace(/,/g, " ");
        if(messageArray[0] == config.prefix.members  + "suggestion") {
            if(!args[0]) {
                if(messageArray[0] !== config.prefix.admin + "suggestion") {};
            } else {
                const embedSuggestion = new Discord.MessageEmbed()
                    .setTimestamp(message.author.avatarURL())
                    .setColor(lang.suggestioncolor)
                    .setTitle(lang.suggestion + " - " + message.author.tag)
                    .setDescription(args.join(" "))
                    .setFooter(lang.footer)
                    .setThumbnail(message.author.avatarURL())
                const messageSuggestion = await message.channel.send(embedSuggestion);
                    messageSuggestion.react("👍");
                    messageSuggestion.react("👎");
            };
        } else {
            if(messageArray[0] == config.prefix.admin + "suggestion") {
            } else {
                const embedSuggestion = new Discord.MessageEmbed()
                .setTimestamp(message.author.avatarURL())
                .setColor(lang.suggestioncolor)
                .setTitle(lang.suggestion + " - " + message.author.tag)
                .setDescription(message)
                .setFooter(lang.footer)
                .setThumbnail(message.author.avatarURL())
            const messageSuggestion = await message.channel.send(embedSuggestion);
                messageSuggestion.react("👍");
                messageSuggestion.react("👎");
        };
        };
        if(messageArray[0] == config.prefix.admin + "suggestion") {
            if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
                if(args[0] == "deny") {
                    if(!args2[0]) {
                        message.author.createDM().then(channel => {
                            const embedSuggestionError1 = new Discord.MessageEmbed()
                                .setColor("RED")
                                .setDescription(
                                    "Please enter the id of the message you want denied or approved !"
                                )
                            channel.send(embedSuggestionError1);
                        });
                    } else {
                        if(args3 == ""){
                            message.channel.messages.fetch({around: args2[0], limit: "1"})
                            .then(msg => {
                            var embed = msg.first().embeds[0];
                            const embedDenied = new Discord.MessageEmbed()
                                .setTitle(lang.denied + " " + embed.title)
                                .setDescription(embed.description)
                                .setThumbnail(embed.thumbnail.url)
                                .setColor("RED")
                                .setFooter(lang.deniedsuggestion + " " + message.author.tag)
                                .addField(lang.notebystaff, lang.noexplantion, false);
                            const fetchedMsg = msg.first();
                            fetchedMsg.edit(embedDenied);
                            msg.first().reactions.removeAll();
                        });
                        } else {
                            message.channel.messages.fetch({around: args2[0], limit: "1"})
                                .then(msg => {
                                var embed = msg.first().embeds[0];
                                const embedDenied = new Discord.MessageEmbed()
                                    .setTitle(lang.denied + " " + embed.title)
                                    .setDescription(embed.description)
                                    .setThumbnail(embed.thumbnail.url)
                                    .setColor("RED")
                                    .setFooter(lang.deniedsuggestion + " " + message.author.tag)
                                    .addField(lang.notebystaff, note, false);
                                const fetchedMsg = msg.first();
                                fetchedMsg.edit(embedDenied);
                                msg.first().reactions.removeAll();
                            });
                        };
                    };
                } else {
                    if(args[0] == "accept") {
                        if(!args2[0]) {
                            message.author.createDM().then(channel => {
                                const embedSuggestionError1 = new Discord.MessageEmbed()
                                    .setColor("RED")
                                    .setDescription(
                                        "Please enter the id of the message you want denied or approved !"
                                    )
                                channel.send(embedSuggestionError1);
                            });
                        } else {
                            if(args3 == ""){
                                message.channel.messages.fetch({around: args2[0], limit: "1"})
                                .then(msg => {
                                var embed = msg.first().embeds[0];
                                const embedApproved = new Discord.MessageEmbed()
                                    .setTitle(lang.approved + " " + embed.title)
                                    .setDescription(embed.description)
                                    .setThumbnail(embed.thumbnail.url)
                                    .setColor("GREEN")
                                    .setFooter("suggestion approved by " + message.author.tag)
                                    .addField(lang.notebystaff, lang.noexplantion, false);
                                const fetchedMsg = msg.first();
                                fetchedMsg.edit(embedApproved);
                                msg.first().reactions.removeAll();
                            });
                            } else {
                                message.channel.messages.fetch({around: args2[0], limit: "1"})
                                    .then(msg => {
                                    var embed = msg.first().embeds[0];
                                    const embedApproved = new Discord.MessageEmbed()
                                        .setTitle(lang.approved + " " + embed.title)
                                        .setDescription(embed.description)
                                        .setThumbnail(embed.thumbnail.url)
                                        .setColor("GREEN")
                                        .setFooter(lang.approved + " " + message.author.tag)
                                        .addField(lang.notebystaff, note, false);
                                    const fetchedMsg = msg.first();
                                    fetchedMsg.edit(embedApproved);
                                    msg.first().reactions.removeAll();
                                });
                            };
                        };
                    } else {
                        message.author.createDM().then(channel => {
                            const embedSuggestionError = new Discord.MessageEmbed()
                                .setColor("RED")
                                .setDescription(
                                    "Please specify if you want to approve or deny a suggestion !"
                                )
                            channel.send(embedSuggestionError);
                        });
                    };
                };
            };
        };
});



// Bug Reports ---------------------------------------------------------------------------------------------------------
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel == config.bugsChannel) {
        message.delete();
        const messageArray = message.content.split(' ');
        if(messageArray[0] == "" || " ") {
            // send to user bug channel
                const bugtouser = new Discord.MessageEmbed()
                .setTimestamp(message.author.avatarURL())
                .setColor(lang.suggestioncolor)
                .setTitle(message.author.tag)
                .setDescription(lang.thankbug)
                .setFooter(lang.footer)
                .setThumbnail(message.author.avatarURL())
            message.channel.send(bugtouser);
            // send to bug log
                const bugtostaff = new Discord.MessageEmbed()
                .setTimestamp(message.author.avatarURL())
                .setColor(lang.suggestioncolor)
                .setTitle("Bug report by user" + " "+ message.author.tag)
                .setDescription(message)
                .setFooter(lang.footer)
                .setThumbnail(message.author.avatarURL())
            bot.channels.cache.get(config.bugLogs).send(bugtostaff);
        } else {};
    };
});




// Initalize Bot ------------------------------------------------------------------------------------------------------        
bot.on("ready", async() => {
    console.log("Bot Started!");
    console.log("Bot by github.com/GJSRT");
});

bot.login(config.token);
