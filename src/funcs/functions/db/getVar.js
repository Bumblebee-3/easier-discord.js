module.exports = {
  name: "$getVar",
  usage: "[name]",
  description: "Gets a variable with the provided name.",
  code: async (d) => {
    const [name] = d.data.splits;
    if (!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
    let value = await d.db.get(name)
    value = value.value;
    value = value === undefined ? d.this.variable.get(name).escape() : value.escape();
    return value;
  }
}
