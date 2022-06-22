module.exports = {
    name: "$editChannelName",
    usage: "[channel id;new channel name;reason (optional)]",
    description: "Edit the name of a channel",
    code: async(d) => {
        const [id, name, reason] = d.data.splits;
        const channel = await d.util.getChannel(d, id);
        if(!channel) return d.sendError("Invalid ChannelID Provided");
        if(!channel.guild.me.permissionsIn(channel).has("MANAGE_CHANNELS")) return d.sendError("Mising Permissions");
        await channel.setName(name, reason).catch((e) => d.sendError('Failed to change channel name with reason: ' + e));
        return "";
    }
}
