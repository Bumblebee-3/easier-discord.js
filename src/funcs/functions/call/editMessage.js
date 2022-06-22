module.exports = {
  name: "$editMessage",
  usage: "[messageId;message;channelid (optional)]",
  description: "edit message with provided message id and channelid",
  code: async (d) => {
    const [messageid, message, channelid = d.channel?.id] = d.data.splits
    const content = d.util.embedParser(message);
    try {
      const channel = await d.util.getChannel(d, channelid)
      let message = await d.util.getMessage(channel, messageid)
      await message.edit(content).catch((e) => d.sendError(d, "Failed to edit message with reason: " + e));
      return "";
    }
    catch (e) {
      return d.sendError(d, "Failed to edit message with reason: " + e)
    }

  }
}
