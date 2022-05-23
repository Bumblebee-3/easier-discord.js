module.exports = {
name: "$setUserVar",
usage: "[name;value;id(optional);guildId(optional)]",
description: "Sets a user's var with provided name(variable's) and id(server's) to the value provided",
code: async (d) => {
  const [name,value,id = d.author?.id, guildid = d.guild?.id] = d.data.splits;
  if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
 await d.db.set(name+"_"+guildid+"_"+id, value);
  return "";
}
}
