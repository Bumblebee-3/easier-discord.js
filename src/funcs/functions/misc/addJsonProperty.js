module.exports = {
  name: "$addJsonProperty",
  usage: "[name;value]",
  description: "add new property to $createJson",
  code: async (d) => {
    const [name, value] = d.data.splits;
    if(!d.data.datas.jsonData) return d.sendError(d, "$createJson not found");
    if(!name && !value) return d.sendError(d, "Name and value part must be provided");
    d.data.datas.jsonData[name?.addB()] = value?.addB()
    return ""
  }
}
