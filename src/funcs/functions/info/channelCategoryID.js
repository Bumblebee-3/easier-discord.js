module.exports = {
  name: "$channelCategoryID",
  usage: "[channelID (optional)]",
  description: "Returns parent ID of the given channel else using current one.",
  code: async (d) => {
    const [id = d.channel?.id] = d.data.splits;
    let channel = id === d.channel?.id ? d.channel : await d.guild?.channels.cache.get(id);
    if (!channel) d.sendError(d, "Invalid Channel ID Provided");
    return channel.parentId;
    }
  }
