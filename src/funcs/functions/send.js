module.exports = async (d) => {
   let [id, msg, returns, embeds = {description: undefined}] = d.data.splits;
   const client = d.client;
   const channel = await client.channels.cache.get(id);
   embeds = typeof embeds == "object" ? embeds : JSON.parse(embeds);
   msg = msg == undefined || msg == "" ? " " : msg;
   const mess = await channel.send({content: `${msg}`.addB(), embeds: [embeds]});
   return returns == "yes" ? mess?.id : ""
}


