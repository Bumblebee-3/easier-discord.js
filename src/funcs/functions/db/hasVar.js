module.exports = {
  name: "$hasVar",
  usage: "[varName]",
  description: "Checks if provided variable name exists.",
  code: async d => {
    const [name] = d.data.splits;
    if (!name) return d.sendError(d, " Please provide the variable name");
    return d.this.variable.has(name).toString()
  }
}
