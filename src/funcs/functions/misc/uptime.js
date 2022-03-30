module.exports = {
name: "$uptime",
usage: "[]",
description: "return bot uptime",
code: async (d) => {
let up = d.client.uptime;
return Math.floor(up / 86400000) + "d " + Math.floor(up / 3600000 % 24) + "h " + Math.floor(up / 60000 % 60) + "m " + Math.floor(up / 1000 % 60) + "s"
}
}
