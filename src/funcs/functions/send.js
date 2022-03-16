module.exports = async (d) => {
   let [id, msg, returns, embeds] = d.data.splits;
   const client = d.client;
   const channel = await client.channels.cache.get(id);
   embeds = embeds == undefined ? "" : typeof embeds == "object" ? embeds : JSON.parse(embeds);
   msg = msg == undefined || msg == "" ? " " : msg;
   const mess = await embeds != "" ? channel.send({content: `${msg}`.addB(), embeds: [embeds]}) : channel.send({content: `${msg}`.addB()});
   return returns == "yes" ? mess?.id : ""
}


