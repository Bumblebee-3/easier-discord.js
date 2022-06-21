module.exports = {
    name: "$changeNickname",
    usage: "[guild id;user id;nickname;reason (optional)]",
    description: "Change the nickname of a user in specified guild",
    code: async(d) => {
        const [guildId, userId, nickname, reason] = d.data.splits;
        const guild = await d.util.getGuild(d, guildId);
        if(!guild) return d.sendError("Invalid GuildID Provided");
        const user = await d.util.getMember(guild, userId);
        if(!user) return d.sendError("Invalid UserID Provided");
        await user.setNickname(nickname, reason);
        return " ";
    }
}
