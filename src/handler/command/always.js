module.exports = async (msg, bot) => {
let data = msg
 if(!data.author?.bot) {
const cmds = bot.cmd.alwaysExecute.values()
for(const cmd of cmds) {
await require("../function.js")(cmd?.code, "$always", bot.db, data, bot.client, bot)
    }
  }
}
