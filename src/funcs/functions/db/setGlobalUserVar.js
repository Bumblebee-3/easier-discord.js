module.exports = {
name: "$setGlobalUserVar",
usage: "[name;value;id(optional)]",
description: "Set a global (means in all server) users var with provided name(variable's) and id(user's) to the given value.",
code: async (d) => {
  const [name, value,id = d.author?.id] = d.data.splits;
  if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
 await d.db.set(name+"_"+id, value);
  return "";
}
}
