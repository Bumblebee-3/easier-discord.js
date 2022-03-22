module.exports = async (d) => {
const [messageid, content, embeds = "", channelid = d.channel.id] = d.data.splits
try {
const channel = await d.client.channels.cache.get(channelid)
let message = await channel.messages.cache.get(messageid)
if(!message) message = await channel.messages.fetch(messageid, { force: true }).catch((e) => undefined)

message.edit({content: content, embeds: [embeds]}).catch((e) => d.sendError(d, "failed to edit message with reason: " + e))

}
catch (e) {
return d.sendError(d, "failed to edit message with reason: " + e)
}

}
