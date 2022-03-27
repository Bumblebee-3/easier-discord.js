module.exports = async (d) => {
const [id = d.author?.id] = d.data.splits;
const user = id == d.author?.id ? d.author : d.client.users.cache.get(id);
return user?.username;
}
