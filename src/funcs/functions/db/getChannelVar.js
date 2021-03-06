module.exports = {
  name: "$getChannelVar",
  usage: "[name;id(optional)]",
  description: "Gets variable data of a channel with provided name (variable) and id (server).",
  code: async (d) => {
    const [name, id = d.channel?.id] = d.data.splits;
    if (!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
    let value = await d.db.get(name + "_" + id)
    value = value.value;
    value = value === undefined ? d.this.variable.get(name).escape() : value.escape();
    return value;
  }

}
