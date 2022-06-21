module.exports = {
  name: "$ban",
  usage: "[userID;reason (optional);days(optional, default to 1 or put 0 to permanent);guildId(optional)]",
  description: "Ban a member with provided id (user ID) from provided id (Guild ID) for an optional number of days, or permanant.",
  code: async (d) => {
    const [userid,
      reason,
      days = 0,
      guildid = d.guild?.id] = d.data.splits;
    let guild = guildid === d.guild?.id ? d.guild : await d.util.getGuild(d, guildid);
    if (!guild) return d.sendError(d, "Invalid GuildID provided");
    if (!userid) return d.sendError(d, "Invalid UserID provided");
    if (isNaN(Number(days)) || Number(days) < 0 || Number(days) > 7) return d.sendError(d, "Invalid number of days provided");
    guild.bans.create(userid, {
      days, reason: reason?.unescape()
    }).catch(e => {
      d.sendError(d, "Failed to ban user with reason: " + e)
    })
    return ""
  }
}
