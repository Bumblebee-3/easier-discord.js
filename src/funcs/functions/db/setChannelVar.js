module.exports = {
name: "$setChannelVar",
usage: "[name;id(optional)]",
description: "set var in channel with provided name and id",
code: async (d) => {
  const [name,value,id = d.channel?.id] = d.data.splits;
 if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
await d.db.set(name+"_"+id, value);
  return "";
   }
}
