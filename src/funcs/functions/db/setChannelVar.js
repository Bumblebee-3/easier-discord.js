module.exports = {
name: "$setChannelVar",
usage: "[name;value;id(optional)]",
description: "Sets a channel's variable with the provided name(variable's) and id(channel's) to the provided value.",
code: async (d) => {
  const [name,value,id = d.channel?.id] = d.data.splits;
 if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
await d.db.set(name+"_"+id, value);
  return "";
   }
}
