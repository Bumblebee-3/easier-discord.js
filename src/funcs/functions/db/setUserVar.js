module.exports = {
name: "$setUserVar",
usage: "[name;id(optional);guildId(optional)]",
description: "set user var with provided name and id",
code: async (d) => {
  const [name,value,id = d.author?.id, guildid = d.guild?.id] = d.data.splits;
  if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
 await d.db.set(name+"_"+guildid+"_"+id, value);
  return "";
}
}
