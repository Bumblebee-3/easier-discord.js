module.exports = {
  name: "$createJson",
  usage: "[json object]",
  description: "parse json object and then save it into data, and u can get it's property with $getJsonProperty",
  code: async (d) => {
    let ins = d.data.inside?.addB()
    try {
      ins = JSON.parse(ins);
    }
    catch (e) {
      return d.sendError(d, "Failed to parse json with reason: " + e);
    }
    d.data.datas.jsonData = ins
    return ""
  }
}
