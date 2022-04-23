module.exports = function (conditions) {
const cond = String(conditions)
if ( cond.includes("==") ) {
let condition = cond.split("==")
return condition[0] == condition[1]
}
else if ( cond.includes("!=") ) {
let condition = cond.split("!=")
return condition[0] != condition[1]
}
else if ( cond.includes(">=") ) {
let condition = cond.split(">=")
return Number(condition[0]) >= Number(condition[1])
}
else if ( cond.includes("<=") ) {
let condition = cond.split("<=")
return Number(condition[0]) <= Number(condition[1])
}
else if ( cond.includes(">") ) {
let condition = cond.split(">")
return Number(condition[0]) > Number(condition[1])
}
else if ( cond.includes("<") ) {
let condition = cond.split("<")
return Number(condition[0]) < Number(condition[1])
}
else {
return false
}
}
