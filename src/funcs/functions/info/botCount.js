module.exports = {
  name: "$botCount",
  usage: "[guildID (optional)]",
  description: "Returns the amount of bots in the given guild, else returns from current guild",
  code: async (d) => {
    const [guildId = d.guild?.id] = d.data.splits;
    let result;

    let guild = guildId === d.guild?.id ? d.guild : await d.client.guilds.cache.get(guildId);
    if (!guild) guild = await d.client.guilds.fetch(guildId, {
      force: true
      });
    if (!guild) return d.sendError(d, "Invalid Guild ID provided");

    result = guild?.members.cache?.filter(x => x.user.bot).size || 0;
    return result;
    }
  }
