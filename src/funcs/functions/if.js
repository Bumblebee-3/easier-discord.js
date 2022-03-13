module.exports = async (d) => {
 const [condition, True, False] = d.data.splits
return eval(condition) ? True : False
}
