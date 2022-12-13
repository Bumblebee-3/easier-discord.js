# easier-discord.js get started
easier-discord.js is package that simplified your discord bot coding without any programming knowledge (but it's recommended to do)

**To get started**:

Make sure you have node js v16+ installed.

## Install
```
npm i easier-discord.js
```
or u can use this command to install the github version
```
npm i github:Bumblebee-3/easier-discord.js
```
Note: _to run this make sure u have github installed_

after installation complete, u can now setup your main file (index.js, main.js or whatever file name u want)
## Setup
create main file (index.js) and put this code:
```javascript
const { Bot } = require("easier-discord.js") //require easier-discord.js bot class
const bot = new Bot({
    intents: ["GUILDS", "GUILD_MESSAGES"], //create your bot intents, put this with your needed
    prefix: "!", //set your bot command prefix to !
    autoUpdateVersion: true //enable auto update when your version is outdated, set to false or leave this part to disable
})
bot.onMessage() //callback that execute command when there's message send, put this once in your bot
bot.command({
    name: "ping",
    code: `
 $sendMessage[$channelId;$pingMs]
 `
})//create your first ping command
/*
    Note that $sendmessage first part (channelid) is optional
    u can pass that part
    $sendMessage[;$pingMs] will work too
*/
bot.login("TOKEN_HERE") //put your bot token here
```
After that setup, run your bot with `node index.js` in your terminal

And go to your server and type !ping, if it success bot should sended you `(botping)Ms`

Congrats! your first bot is ready to be used!
### Client presence
With easier-discord.js, you can set multiple client statuses by doing the following:
```js
const myBot = new Bot({...});
myBot.addPresence({
    text: 'Easier status', // the status text
    time: 12000, // status time
    type: 'WATCHING', // status type
    status: 'idle' // presence type
},{
    text: 'Added by CGX',
    time: '1m 20s', // Time also supports this format. (Must be number or string)
    type: 'COMPETING',
    status: 'dnd'
});
```
### Command handler
You need to call the CommandHandler class:
```js
const { Bot, CommandHandler } = require("easier-discord.js") //require easier-discord.js classes
const myBot = new Bot({
    intents: ["GUILDS", "GUILD_MESSAGES"], //create your bot intents, put this with your needed
    prefix: "!", //set your bot command prefix to !
    autoUpdateVersion: true //enable auto update when your version is outdated, set to false or leave this part to disable
})
bot.onMessage()
const loader = new CommandHandler({
    bot: myBot
});
loader.load('./cmds');
```
#### Command format
The command must look like this:
```js
module.exports = {
    name: 'ping',
    type: 'default',
    code: `
        $sendMessage[pong]
    `
}
```

Need help? Join our official Discord server [here](https://discord.gg/DW4CCH236j)