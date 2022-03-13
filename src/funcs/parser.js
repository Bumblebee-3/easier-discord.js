const fs = require("fs")
const parse = fs.readdirSync(__dirname + "/functions")
    let func = parse.map(z => "$" + z.replace(/.js/g, ""))

module.exports = func
