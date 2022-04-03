module.exports = async (msg, bot) => {
let data = {
author: msg.author,
member: msg.member,
channel: msg.channel,
message: msg,
guild: msg.guild
  }
 if(!data.author?.bot) {
const cmds = bot.cmd.alwaysExecute.values()
for(const cmd of cmds) {
await require("../function.js")(cmd?.code, "$always", bot.db, data, bot.client, bot)
    }
  }
}
