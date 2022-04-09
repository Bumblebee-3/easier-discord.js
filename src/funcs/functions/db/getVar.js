module.exports = {
name: "$getVar",
usage: "[name]",
description: "get var with provided name",
code: async (d) => {
const [name] = d.data.splits;
if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
let value = await d.db.get(name)
value = value.value;
value = value === undefined ? d.this.variable.get(name).delB() : value.delB();
 return value;
   }
}
