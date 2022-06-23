# easier-discord.js get started
easier-discord.js is package that simplified your discord bot coding without any programming knowledge (but it's recommended to do)

**To get started**:

make sure u have node js v16+ installed

and install easier-discord.js with npm using this command:
```
npm i easier-discord.js
```
or u can use this command to install the github version
```
npm i github:Bumblebee/easier-discord.js
```
Note: _to run this make sure u have github installed_

after installation complete, u can now setup your main file (index.js, main.js or whatever file name u want)

create main file (index.js) and put this Code
```javascript
const Discord = require("easier-discord.js") //require easier-discord.js module
const bot = new Discord.Bot({
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

and.. Congrats! you create your first bot with easier-discord.js

Need help? join our official discord server [here](https://discord.gg/DW4CCH236j)