module.exports = {
name: "$getChannelVar",
usage: "[name;id(optional)]",
description: "get var in channel with provided name and id",
code: async (d) => {
  const [name,id = d.channel?.id] = d.data.splits;
  if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
  let value = await d.db.get(name+"_"+id)
  value = value.value;
  value = value === undefined ? d.this.variable.get(name).delB() : value.delB();
  return value;
}

}
