module.exports = {
  name: "$charCount",
  usage: "[text]",
  description: "Returns the number of characters in the field.",
  code: async(d) => {
  return d.data.inside.length
}
  }
