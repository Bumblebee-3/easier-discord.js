module.exports = {
  name: "$shutdown",
  usage: "[]",
  description: "Destroyes the client and shuts down the NodeJS process",
  code: async (d) => {
    d.client?.destroy()
    process?.exit()
  }
}
