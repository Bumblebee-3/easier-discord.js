module.exports = async (d) => {
const check = require("../../../handler/checkCondition.js")
 const [condition, ms] = d.data.splits
 try {
let cond = check(condition)
d.msg.error = !cond
   
d.msg.error ? d.msg.channel.send(`${ms}`) : ""
  }
catch (e) {
d.sendError(d, "Wrong usage. condition must have \". example : $onlyIf[\"value\" == \"value\";error message here]")
}
  return ""
}
