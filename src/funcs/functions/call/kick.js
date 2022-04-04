module.exports = {
  name: "$kick",
  usage: "[userID;reason (optional);guildId(optional)]",
  description: "kick member with provided id from provided guildId",
  code: async (d) => {
    const [userid,
      reason,
      guildid = d.guild?.id] = d.data.splits;
    let guild = guildid === d.guild?.id ? d.guild: await d.client.guilds.cache.get(guildid);
    if (!guild) guild = await d.client.guilds.fetch(guildid, {
      force: true
    });
    if (!guild) return d.sendError(d, "Invalid provided guild id");
    let user = await guild.members.cache.get(userid);
    if (!user) user = await guild.members.fetch(userid, {
      force: true
    });
    if (!user) return d.sendError(d, "Invalid provided user id");
    user.kick(reason?.addB()).catch(e => {
      d.sendError(d, "Failed to kick user with reason: " + e)
    })
    return ""
  }
}
