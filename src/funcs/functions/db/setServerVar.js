module.exports = {
name: "$setServerVar",
usage: "[name;id(optional)]",
description: "set var in server with provided name and id",
code: async (d) => {
  const [name,value,id = d.guild?.id] = d.data.splits;
if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
 await d.db.set(name+"_"+id, value);
  return "";
}
}
