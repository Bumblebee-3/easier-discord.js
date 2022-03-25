module.exports = async (d) => {
const check = require("../../../handler/checkCondition.js")
 const [condition, True, False] = d.data.splits
return check(condition) ? True : False
}
