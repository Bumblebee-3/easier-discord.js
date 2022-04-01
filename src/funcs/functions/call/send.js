module.exports = {
name: "$send",
usage: "[channel id;message;return id(yes/no)]",
description: "send message in provided channel id",
code: async (d) => {
   let [id, msg, returns] = d.data.splits;
   const client = d.client;
   let channel = await client.channels.cache.get(id);
   if(!channel) channel = await client.channels.fetch(id, {force: true});
   if(!channel) return d.sendError(d, "Invalid channel id provided");
   let mess;
   try {
 mess = await channel.send(d.util.embedParser(msg));
  }
catch(e) {
return d.sendError(d, e)
}
  return returns == "yes" ? mess?.id : ""

 }


}
