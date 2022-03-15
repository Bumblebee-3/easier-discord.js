module.exports = async (data, name, db, message, client, error, real) => {
   /* const parse = fs.readdirSync(__dirname + "/functions")*/

function err (d, message) {
d.msg.error = true
d.msg.channel.send(`\`${d.data.func} error: ${message}\``)
}

let d = data.name
let all = {db: db, data: data, msg: message, client: client, cmd: name, error: error, this: real, sendError: err}
   return await real.functions.get (d.toLowerCase())(all)
    }
