module.exports = {
name: "$setServerVar",
usage: "[name;value;id(optional)]",
description: "Sets a variable of a server with provided name(variable's) and id(server's) to the value provided.",
code: async (d) => {
  const [name,value,id = d.guild?.id] = d.data.splits;
if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
 await d.db.set(name+"_"+id, value);
  return "";
}
}
