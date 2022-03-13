const fs = require("fs")


module.exports = async (data, name, db, message, client, error) => {
   /* const parse = fs.readdirSync(__dirname + "/functions")*/
   let d = data.name.replace(/\$/g, "")
   let all = {db: db, data: data, msg: message, client: client, cmd: name, error: error}
   let dir = fs.readdirSync(__dirname + "/functions/")
   return await require (dir + d.toLowerCase() + ".js")(all)
    }
