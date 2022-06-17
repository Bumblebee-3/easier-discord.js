module.exports = {
  name: "$isChannelNsfw",
  usage: "[channelID (optional)]",
  description: "Returns boolean wether thr channel is type NSFW or not.",
  code: async (d) => {
    const [id = d.channel?.id] = d.data.splits;
    let channel = id === d.channel?.id ? d.channel : await d.client?.channels.cache.get(id);
    if (!channel) d.sendError(d, "Invalid Channel ID Provided");
    return channel.nsfw;
    }
  }
