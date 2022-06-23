module.exports = {
    name: "$giveRoles",
    description: "Give roles to provided user",
    usage: "[guildid(optional);userid;roleid;roleid....]",
    code: async (d) => {
        const [guildid = d.guild?.id, userid, ...roles] = d.data.splits;
        const guild = await d.util.getGuild(d,guildid);
        if(!guild) return d.sendError(d, "Invalid GuildID provided");
        const user = await d.util.getMember(guild,userid)
        if(!user) return d.sendError(d, "Invalid UserID provided");
        user.roles.add(roles).catch(e => {
            d.sendError(d, "Failed to give roles with reason: " + e)
        })
    }
}