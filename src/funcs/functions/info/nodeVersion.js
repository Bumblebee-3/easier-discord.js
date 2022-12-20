module.exports = {
name: "$nodeVersion",
usage: "[]",
description: "return Node Version",
code: async(d) => {
  return process.version
 }
}
