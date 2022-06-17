module.exports = {
name: "$dateNow",
usage: "[]",
description: "return date in ms from 1970 (it actually Date.now())",
code: async (d) => {
   return Date.now()
  }
}
