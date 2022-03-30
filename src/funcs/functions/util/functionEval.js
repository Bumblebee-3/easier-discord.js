module.exports = {
name: "$functionEval",
usage: "[text]",
description: "eval the function provided in text part\nExample: ```js\n$send[$channelId[];$functionEval[$message[]]]```",
code: async (d) => {
return await require("../../../handler/function.js")(d.data.inside.addB(), d.cmd, d.db, d.msg, d.client, d.this) 
}
}
