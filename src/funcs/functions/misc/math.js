module.exports = {
name: "$math",
usage: "[number]",
description: "count the provided number\nExample: ```js\n$math[1+(3*3)]```",
code: async (d) => {
let result;
try {
result = eval(d.data.inside.addB())
  }
catch (e) {
 return d.sendError(d, "invalid number or mathematic symbols")
  }
return result
}
}
