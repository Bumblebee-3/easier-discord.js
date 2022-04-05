module.exports = {
name: "$setGlobalUserVar",
usage: "[name;value;id(optional)]",
description: "set gloabal (mean in all server) user var with provided name and id",
code: async (d) => {
  const [name, value,id = d.author?.id] = d.data.splits;
  if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
 await d.db.set(name+"_"+id, value);
  return "";
}
}
