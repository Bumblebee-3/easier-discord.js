module.exports = async (d) => {
   const [id,title] = d.data.splits;
   const client = d.client;
   const channel = await client.channels.cache.get(id);
   d.embeds = new d.embed();
   d.embeds.setTitle(title.addB());
   const mess = await channel.send(d.embeds);
   return ""
}
