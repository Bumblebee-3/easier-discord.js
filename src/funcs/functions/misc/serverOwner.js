module.exports = {
    name: "$serverowner",
    usage: "[guildId]",
    description: "Get the server owner of the provided guildId",
    code: async (d) => {
        const [guildid = d.guild?.id] = d.data.splits;
        let guild = guildid === d.guild?.id ? d.guild : await d.client.guilds.cache.get(guildid);
        if (!guild) guild = await d.client.guilds.fetch(guildid, {
            force: true
        });
        if (!guild) return d.sendError(d, "Invalid provided guild id");
        return guild.ownerId ? guild.ownerId : (await guild.fetchOwner())?.id;
    }
}