module.exports = async (memb, bot) => {
let data = {
author: memb.user,
guild: memb.guild,
member: memb
  }
const cmds = bot.cmd.memberJoin.values()
for(const cmd of cmds) {
if(cmd?.channel?.includes("$")) {
data.channel = bot.client.channels.cache.get(await require("../function.js")(cmd?.channel, "channeleval", bot.db, data, bot.client, bot))
    }
else {
data.channel = bot.client.channels.cache.get(cmd?.channel)
    }
await require("../function.js")(cmd?.code, "memberJoin", bot.db, data, bot.client, bot)
  }
}
