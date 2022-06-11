module.exports = {
    name: "$changeNickname",
    usage: "[guild id;user id;nickname;reason (optional)]",
    description: "Change the nickname of a user in specified guild",
    code: async(d) => {
        const [guildId, userId, nickname, reason] = d.data.splits;
        const guild = d.client.guilds.cache.get(guildId);
        if(!guild) return d.sendError("Guild not found");
        const user = guild.members.cache.get(userId);
        if(!user) return d.sendError("User not found");
        await user.setNickname(nickname, reason).catch((e) => d.sendError('failed to change nickname with reason: ' + e));
        return "";
    }
}