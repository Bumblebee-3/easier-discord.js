module.exports = {
name: "$getUserVar",
usage: "[name;id(optional)]",
description: "get user var with provided name and id",
code: async (d) => {
  const [name,id = d.author?.id, guildid = d.guild?.id] = d.data.splits;
  if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
  let value = d.db.get(name+"_"+guildid+"_"+id).value;
  value = value === undefined ? d.this.variable.get(name).delB() : value.delB();
  return value;
}
}
