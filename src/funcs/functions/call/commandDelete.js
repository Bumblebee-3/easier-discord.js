module.exports = {
  name: "$commandDelete",
  usage: "[]",
  description: "Deletes the message that executed the code.",
  code: async (d) => {
    try {
      await d.message.delete()
      }
    catch(e) {
        return d.sendError(d, e)
       }
    }
  }
