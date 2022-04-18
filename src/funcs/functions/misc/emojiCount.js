module.exports = {
name: "$emojiCount",
usage: "[guildID? (optional)]",
description: "Return emojis count in provided guild id",
code: async (d) => {
   const id = d.data.inside ?? d.guild?.id;
   let guild = d.client.guilds.cache.get(id);
   if(!guild) return d.sendError(d, "Your provided guild id is invalid")
   return guild.emojis?.cache?.size
  }
}
