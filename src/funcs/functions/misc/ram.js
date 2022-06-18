module.exports = {
name: "$ram",
usage: "[]",
description: "return ram usage",
code: async (d) => {
return (process.memoryUsage().rss / 1024 / 1024).toFixed(2)
}
}
