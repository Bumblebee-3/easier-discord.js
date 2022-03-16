const fs = require("fs")
const path = require("path")
const parse = fs.readdirSync(path.join(__dirname, "functions"))
    let func = parse.map(z => "$" + z.replace(/.js/g, ""))

module.exports = func
