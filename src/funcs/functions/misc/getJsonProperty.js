module.exports = {
  name: "$getJsonProperty",
  usage: "[property]",
  description: "get json property from $createJson",
  code: async (d) => {
    return JSON.stringify(eval(`d.data.datas.jsonData?.${d.data.inside?.addB()}`))
  }
}
