module.exports = {
  name: "$unban",
  usage: "[userID;guildId(optional)]",
  description: "unban a member with provided id from provided guildId",
  code: async (d) => {
    const [userid, guildid = d.guild?.id] = d.data.splits;
    let guild = guildid === d.guild?.id ? d.guild : await d.util.getGuild(d, guildid);
    if (!guild) return d.sendError(d, "Invalid GuildID provided");
    if (!userid) return d.sendError(d, "Invalid UserID provided");
    guild.members.unban(userid);
    return "";
  }
}
