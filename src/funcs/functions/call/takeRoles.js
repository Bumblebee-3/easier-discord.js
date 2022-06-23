module.exports = { 
    name: "$takeRoles",
    description: "Take roles from provided user",
    usage: "[guildid (optional);userid;roleid;roleid...]",
    code: async (d) => {
        const [guildid = d.guild?.id, userid, ...roles] = d.data.splits;
        const guild = await d.util.getGuild(d, guildid);
        if(!guild) return d.sendError(d, "Invalid GuildID provided");
        const user = await d.util.getMember(guild, userid);
        if(!user) return d.sendError(d, "Invalid UserID provided");
        user.roles.remove(roles).catch(e => {
            d.sendError(d, "Failed to remove roles with reason: " + e)
        })
    }
}