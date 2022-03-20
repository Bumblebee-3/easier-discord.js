module.exports = async (data, name, db, message, client, error, real) => {
   /* const parse = fs.readdirSync(__dirname + "/functions")*/

function err (d, message) {
d.msg.error = true
d.msg.channel.send(`\`${d.data.name} error: ${message}\``)
}
let messagee = message?.msg || message
let d = data.name
let all = {db: db, data: data, msg: messagee, message: messagee, author: message.author, channel: message.channel, guild: message.guild, member: message.member, mentions: message.mentions, client: client, cmd: name, error: error, this: real, sendError: err}
   return await real.functions.get (d.toLowerCase())(all)
    }
