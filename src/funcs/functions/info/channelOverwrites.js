module.exports = {
  name: "$channelOverwrites",
  usage: "[channelID (optional) response (optional) sep (optional)]",
  description: "Returns channel overwrites for the given channel else current one.",
  code: async (d) => {
    const [channelID = d.channel?.id, response = "{mention} ({type}):\nAllowed Perms: {allow}\nDenied Perms: {deny}", sep = " , "] = d.data.splits;
    let channel = await d.client.channels.cache.get(channelID);
    let result;
    if (!channel) channel = await d.client.channels.fetch(channelID, { force: true });
    if (!channel) return d.sendError(d, "Invalid channel id provided");
    let overwrites = [...channel.permissionOverwrites.cache.values()];
    result = overwrites.map(x => response.replaceAll("{mention}", x.type === "role" ? `<@&${x.id}>` : `<@${x.id}>`).replaceAll("{type}", x.type).replaceAll("{allow}", x.allow.toArray().join(" , ")).replaceAll("{deny}", x.deny.toArray().join(" , "))).join(sep);
    return result:
    }
  }
