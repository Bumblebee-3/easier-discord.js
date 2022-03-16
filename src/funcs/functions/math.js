module.exports = async (d) => {
let result;
try {
result = eval(d.data.inside)
  }
catch (e) {
 return d.sendError(d, "invalid number or mathematic symbols")
  }
return result
}
