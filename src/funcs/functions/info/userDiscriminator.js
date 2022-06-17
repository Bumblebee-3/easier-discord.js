module.exports = {
  name: "$userDiscriminator",
  usage: "[userID (optional)]",
  description: "Returns discriminator for the given user else author.",
  code: async (d) => {
        const [id = d.author?.id] = d.data.splits;
        const user = id == d.author?.id ? d.author : d.client.users.cache.get(id);
        if (!user) user = d.client.users.fetch(id,{
          force: true
          });
        if (!user) d.sendError(d, "Invalid User ID Provided");
        return user?.discriminator;
    }
  }
