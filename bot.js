const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if(message.content.startsWith(">ping")) {
            message.channel.send(new Date().getTime() - message.createdTimestamp + " ms :ping_pong: **Pong** ");        
    }
}

client.on('message', message => {
    if (message.content === '>bing') {
    	message.reply('**Bong**');
  	}

client.on('message', message => {
    if (message.content === '>avatar') {
        message.reply(message.author.avatarURL);
    }  

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
