module.exports = {
    name: "$editChannelName",
    usage: "[channel id;new channel name;reason (optional)]",
    description: "Edit the name of a channel",
    code: async(d) => {
        const [id, name, reason] = d.data.splits;
        const channel = d.client.channels.cache.get(id);
        if(!channel) return d.sendError("Channel not found");
        if(!channel.guild.me.permissionsIn(channel).has("MANAGE_CHANNELS")) return d.sendError("Client does not have the permission to edit the channel");
        await channel.setName(name, reason).catch((e) => d.sendError('failed to change channel name with reason: ' + e));
        return "";
    }
}