module.exports = {
  name: "$getGlobalUserVar",
  usage: "[name;id(optional)]",
  description: "Gets gloabal (means in all servers) user(s) variables with provided name(variable's) and id(user's).",
  code: async (d) => {
    const [name, id = d.author?.id] = d.data.splits;
    if (!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
    let value = await d.db.get(name + "_" + id)
    value = value.value;
    value = value === undefined ? d.this.variable.get(name).escape() : value.escape();
    return value;
  }
}
