module.exports = {
name: "$editMessage",
usage: "[messageId;content (optional when embed provided);embed (optional);channelid (optional)]",
description: "edit message with provided message id and channelid",
code: async (d) => {
const [messageid, content, embed, channelid = d.channel?.id] = d.data.splits

try {
let embeds = embed !== undefined ? JSON.parse(embed?.addB()) : undefined;
const channel = await d.client.channels.cache.get(channelid)
let message = await channel.messages.cache.get(messageid)
if(!message) message = await channel.messages.fetch(messageid, { force: true }).catch((e) => undefined)
if(embeds) await message.edit({content: content, embeds: [embeds]}).catch((e) => d.sendError(d, "failed to edit message with reason: " + e))
else await message.edit({content: content}).catch((e) => d.sendError(d, "failed to edit message with reason: " + e));
return "";
}
catch (e) {
return d.sendError(d, "failed to edit message with reason: " + e)
}

  }
}
