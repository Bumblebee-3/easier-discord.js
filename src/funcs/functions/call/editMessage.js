module.exports = {
name: "$editMessage",
usage: "[messageId;message;channelid (optional)]",
description: "edit message with provided message id and channelid",
code: async (d) => {
const [messageid, message, channelid = d.channel?.id] = d.data.splits
const content = d.util.embedParser(message);
try {
const channel = await d.client.channels.cache.get(channelid)
let message = await channel.messages.cache.get(messageid)
if(!message) message = await channel.messages.fetch(messageid, { force: true }).catch((e) => undefined)
await message.edit(content).catch((e) => d.sendError(d, "failed to edit message with reason: " + e));
return "";
}
catch (e) {
return d.sendError(d, "failed to edit message with reason: " + e)
}

  }
}
