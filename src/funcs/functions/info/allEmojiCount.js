module.exports = {
  name: "$allEmojiCount",
  usage: "None",
  description: "Returns emoji count in the client cache. ( Required type )",
  code: async (d) => {
    const [type] = d.data.splits;
    let result = type
      ? d.client.emojis.cache.filter((x) =>
          type === "animated"
            ? x.animated
            : type === "roles"
            ? x.roles.cache.size
            : type === "normal"
            ? !x.animated
            : x[type],
        ).size
      : d.client.emojis.cache.size 

    return result;
   }
  } 
