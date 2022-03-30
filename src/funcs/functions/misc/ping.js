module.exports = {
name: "$ping",
usage: "[]",
description: "return websocket ping",
code: async (d) => {
return d.client.ws.ping
}
}
