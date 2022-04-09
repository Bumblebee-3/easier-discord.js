module.exports = {
name: "$onlyIf",
usage: "[condition;error message(optional)]",
description: "if condition is false it'll stop function execution and return error message\nExample: \n```js\n$send[$channelId[];hi]\n$onlyIf[$message[1]==hi;no hi]\n```",
code: async (d) => {
const check = require("../../../handler/checkCondition.js")
 const [condition, ms = ""] = d.data.splits
 const mss = d.util.embedParser(ms);
let cond = check(condition)
d.data.datas.isError = !cond
   
d.data.datas.isError && ms?.trim() !== "" ? d.msg.channel.send(mss) : ""

  return ""
}
}
