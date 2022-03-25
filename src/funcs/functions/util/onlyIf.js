module.exports = async (d) => {
const check = require("../../../handler/checkCondition.js")
 const [condition, ms] = d.data.splits
 
let cond = check(condition)
d.msg.error = !cond
   
d.msg.error ? d.msg.channel.send(`${ms}`) : ""

  return ""
}
