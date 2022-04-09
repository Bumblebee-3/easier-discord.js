module.exports = {
name: "$getServerVar",
usage: "[name;id(optional)]",
description: "get var in server with provided name and id",
code: async (d) => {
  const [name,id = d.guild?.id] = d.data.splits;
if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
 let value = await d.db.get(name+"_"+id)
 value = value.value;
value = value === undefined ? d.this.variable.get(name).delB() : value.delB();
return value;
}

}
