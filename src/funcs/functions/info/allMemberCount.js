module.exports = {
  name: "$allMemberCount",
  usage: "None",
  description: "Returns all the members inside client guild cache. ( Size )",
  code: async (d) => {
    return d.client.guilds.cache.map(x => x.memberCount ?? 0).reduce((a, b) => a + b, 0)
    }
  }
