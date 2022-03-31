module.exports = {
name: "$if",
usage: "[condition;message when true;message when false]",
description: "return message depends on condition\nExample: \n```js\n$send[$channelId[];$if[$message[1]==hi;your args 1 is hi;your args 1 isn't hi]]\n```",
code: async (d) => {
const check = require("../../../handler/checkCondition.js")
 const [condition, True, False] = d.data.splits
return check(condition) ? True : False
}
}
