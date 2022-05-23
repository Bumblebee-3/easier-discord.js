module.exports = {
name: "$setVar",
usage: "[name;value]",
description: "Sets variables with provided name to the given value.",
code: async (d) => {
const [name, value] = d.data.splits;
if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
 await d.db.set(name, value)
    return ""
    }
}
