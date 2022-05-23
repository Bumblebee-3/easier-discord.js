module.exports = {
name: "$getServerVar",
usage: "[name;id(optional)]",
description: "Gets variable of a server with provided name(variable's) and id(server's)",
code: async (d) => {
  const [name,id = d.guild?.id] = d.data.splits;
if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
 let value = await d.db.get(name+"_"+id)
 value = value.value;
value = value === undefined ? d.this.variable.get(name).delB() : value.delB();
return value;
}

}
