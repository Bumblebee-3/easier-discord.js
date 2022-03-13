module.exports = async (data, name, db, message, client, error) => {
   /* const parse = fs.readdirSync(__dirname + "/functions")*/
let d = data.name.replace(/\$/g, "")
let all = {db: db, data: data, msg: message, client: client, cmd: name, error: error}
   return await require ("./functions/" + d.toLowerCase() + ".js")(all)
    }
