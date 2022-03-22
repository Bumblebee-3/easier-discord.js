const fs = require("fs")
const path = require("path")
const dirr = path.join(__dirname, "functions")
let parser = fs.readdirSync(dirr)
 let parse = [];
parser.forEach(z => {
fs.readdirSync(path.join(dirr, z)).forEach(y => {
parse.push(y)
})
})
  let func = parse.map(z => "$" + z.replace(/.js/g, ""))

module.exports = func
