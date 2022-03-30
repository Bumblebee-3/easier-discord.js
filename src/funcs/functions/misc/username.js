module.exports = {
name: "$username",
usage: "[user id(optional default to authorid)]",
description: "return username of provided user id",
code: async (d) => {
const [id = d.author?.id] = d.data.splits;
const user = id == d.author?.id ? d.author : d.client.users.cache.get(id);
return user?.username;
}
}
