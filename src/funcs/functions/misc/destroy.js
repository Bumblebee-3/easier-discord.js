module.exports = {
  name: "$destroy",
  usage: "[]",
  description: "Destroyes the client process.",
  code: async (d) => {
    let client = d.client;
    if (!client) {
      return d.sendError(d, "Client isn't ready yet.");
      };
    await client.destroy();
    }
  }
