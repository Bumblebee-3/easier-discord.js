module.exports = async (guild, bot) => {
let data = {
guild: guild
  }
const cmds = bot.cmd.botJoin.values()
for(const cmd of cmds) {
if(cmd?.channel?.includes("$")) {
data.channel = bot.client.channels.cache.get(await require("../function.js")(cmd?.channel, "channeleval", bot.db, data, bot.client, bot))
    }
else {
data.channel = bot.client.channels.cache.get(cmd?.channel)
    }
await require("../function.js")(cmd?.code, "botJoin", bot.db, data, bot.client, bot)
  }
}
