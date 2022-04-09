const client = require("./src/index.js")
require("./src/handler/string.js")
module.exports = {
    Bot: client.Bot,
    CommandHandler: client.CommandHandler
   }
