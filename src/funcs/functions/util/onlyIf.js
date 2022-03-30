module.exports = {
name: "$onlyIf",
usage: "[condition;error message(optional)]",
description: "if condition is false it'll stop function execution and return error message\nExample: ```js\n$send[$channelId[];hi]\n$onlyIf[$message[1]==hi;no hi]```",
code: async (d) => {
const check = require("../../../handler/checkCondition.js")
 const [condition, ms] = d.data.splits
 
let cond = check(condition)
d.msg.error = !cond
   
d.msg.error && ms?.trim() !== "" ? d.msg.channel.send(`${ms.addB()}`) : ""

  return ""
}
}
