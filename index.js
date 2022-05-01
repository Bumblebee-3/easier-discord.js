if(parseInt(process.version.replace("v","")) < 16) {
   console.warn("\x1b[31mWarning!\x1b[0m\n\x1b[33measier-discord.js require node js version 16+ to be work, your current node js version: ", process.version, "please update your node js version and try again")
   process.exit()
} else {
   const client = require("./src/index.js")
   require("./src/handler/string.js")

module.exports = {
    Bot: client.Bot,
    CommandHandler: client.CommandHandler
   }
}
