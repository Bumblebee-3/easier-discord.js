module.exports = {
  name: "$kick",
  usage: "[userID;reason (optional);guildId(optional)]",
  description: "kick member with provided id from provided guildId",
  code: async (d) => {
    const [userid,
      reason,
      guildid = d.guild?.id] = d.data.splits;
    let guild = guildid === d.guild?.id ? d.guild : await d.util.getGuild(d, guildid)
    if (!guild) return d.sendError(d, "Invalid GuildID Provided");
    let user = await d.util.getMember(guild, userid)
    if (!user) return d.sendError(d, "Invalid UserID Provided");
    user.kick(reason?.unescape()).catch(e => {
      d.sendError(d, "Failed to kick user with reason: " + e)
    })
    return ""
  }
}
