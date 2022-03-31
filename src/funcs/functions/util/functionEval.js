module.exports = {
name: "$functionEval",
usage: "[text]",
description: "eval the function provided in text part\nExample: \n```js\n$send[$channelId[];$functionEval[$message[]]]\n```",
code: async (d) => {
return await require("../../../handler/function.js")(d.data.inside.addB(), d.cmd, d.db, d.msg, d.client, d.this) 
}
}
