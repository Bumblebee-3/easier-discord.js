module.exports = async (data, name, db, message, client, error, real) => {
   /* const parse = fs.readdirSync(__dirname + "/functions")*/
let d = data.name
let all = {db: db, data: data, msg: message, client: client, cmd: name, error: error, this: real}
   return await real.functions.get (d.toLowerCase())(all)
    }
