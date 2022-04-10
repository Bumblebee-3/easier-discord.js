module.exports = async (data, name, db, message, client, error, real) => {
   /* const parse = fs.readdirSync(__dirname + "/functions")*/

function err (d, message) {
if(d.msg?.channel === undefined) {
console.error(`\`${d.data.name} error: ${message}\``)
  } else {
d.data.datas.isError = true
d.msg.channel.send(`\`${d.data.name} error: ${message}\``)
  }
}
const util = {};
util.embedParser = require ("../handler/embedParser.js");
util.checkCondition = require("../handler/checkCondition.js");
let messagee = message?.msg || message
let d = data.name
let all = {db: db, data: data, msg: messagee, message: messagee, author: message.author, channel: message.channel, guild: message.guild, member: message.member, mentions: message.mentions, client: client, cmd: name, error: error, this: real, sendError: err, util: util}
let arg = all.msg?.content?.replace(all.client?.prefix, "").replace(all.cmd, "");
arg = arg?.trim();
all.arg = arg
   return await real.functions.get (d.toLowerCase())(all)
    }
