module.exports = {
name: "$send",
usage: "[channel id;message (optional when embed provided);return id(yes/no)(optional);embeds(optional)]",
description: "send message in provided channel id",
code: async (d) => {
   let [id, msg, returns, embeds] = d.data.splits;
   const client = d.client;
   const channel = await client.channels.cache.get(id);
   embeds = embeds == undefined ? "" : typeof embeds == "object" ? embeds : JSON.parse(embeds.addB());
   msg = msg == undefined || msg == "" ? " " : msg;
   let mess;
   try {
   mess = await embeds != "" ? await channel.send({content: `${msg}`.addB(), embeds: [embeds]}) : await channel.send({content: `${msg}`.addB()});
  }
catch(e) {
return d.sendError(d, e)
}
  return returns == "yes" ? mess?.id : ""

 }


}
