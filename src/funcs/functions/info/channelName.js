module.exports = {
  name: "$channelName",
  usage: "[channelID (optional)]",
  description: "Returns channel name of the given id else current channel.",
  code: async (d) => {
    const [id = d.channel?.id] = d.data.splits;
    let channel = id === d.channel?.id ? d.channel : await d.client?.channels.cache.get(id);
    if (!channel) channel = await d.client.channels.fetch(id, { force: true });
    if (!channel) d.sendError(d, "Invalid Channel ID Provided");
    return channel.name;
    }
  }
