module.exports = {
name: "$userTag",
usage: "[userID (optional)]",
description: "return user tag with provided id",
code: async (d) => {
let [id = d.author?.id] = d.data.splits;
id = id == d.author?.id ? d.author : d.client.users.cache.get(id);
if (!id) return d.sendError(d, "Invalid user id");
return id?.tag
  }
}
