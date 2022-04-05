module.exports = {
name: "$setVar",
usage: "[name]",
description: "set var with provided name",
code: async (d) => {
const [name, value] = d.data.splits;
if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
 await d.db.set(name, value)
    return ""
    }
}
