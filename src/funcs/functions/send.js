module.exports = async (d) => {
   const [id, msg, returns] = d.data.splits;
   const client = d.client;
   const channel = await client.channels.cache.get(id);
  const mess = await channel.send(`${msg}`.addB());
   return returns == "yes" ? mess?.id : ""
}


