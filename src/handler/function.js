let debug = require('debug')("ez:function")
module.exports = async (
  cod,
  name,
  db,
  msg,
  client,
  real,
  DaTa
) => {

  debug("functions#")
  let readFunc = require("../funcs/parser.js")


  let code = cod
  // let lower = typeof code === "string" ? code.toLowerCase() : ""
  let split = typeof code === "string" ? code.split("$"): []

  let Fin = []
  function search(functions) {
    for (const f of functions) {
      let func = readFunc.filter((ff) => ff.localeCompare(("$" + f).slice(0, ff.length), undefined, {
        sensitivity: "accent"
      }) === 0
      )
      if (func.length == 1) {
        Fin.push(func[0])
      } else if (func.length > 1) {
        Fin.push(func.sort((a, b) => b.length - a.length)[0])
      }
    }

    return Fin
  }
  if (typeof code === "string") {
    var datas = DaTa || {
      isError: false,
      suppressErrors: false
    };
    let functions = search(split).reverse()
    for (const func of functions) {
      const regEscape = v => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

      let params = code.split(new RegExp (regEscape(func), "gi"))
      params = params[params.length - 1]
      let param = params;
      let a = 0;
      if (!params.startsWith("[")) continue;
      for (let i = 0;;i++) {
        if (param.charAt(i) == "[") {
          a++
        } else if (param.charAt(i) == "]") {
          a--
        };
        if (a <= 0 || i > param.length) {
          param = a >= 0 ? i - 1: a == -1 ? i - 2: a == -2 ? i - 3: a == -3 ? i - 4: i - 5
          break;
        }
      }
      params = params.substring(1, param + 1)

      let splitted = params.split(";")
      let replacer = await require("../funcs/replacer.js")({
        name: func, inside: params, splits: splitted.map(z => z == "" ? undefined: z), all: func + "[" + params + "]", datas: datas
      }, name, db, msg, client, datas.isError, real)
      code = code.replaceLast(func + "[" + params + "]", replacer)
      if (datas.isError) break;
    }
  } else {
    let message = msg
    let messagee = message?.msg || message?.message || message
    // let d = data.name
    /*function err (d, message) {
  d.data.datas.isError = true
  d.msg.channel.send(`\`${d.data.name} error: ${message}\``)
  }*/
    let data = {}
    let all = {
      db: db,
      data: data,
      msg: messagee,
      message: messagee,
      author: message.author,
      channel: message.channel,
      guild: message.guild,
      member: message.member,
      mentions: message.mentions,
      client: client,
      cmd: name,
      error: msg.error,
      this: real
    } // sendError: err}
    let arg = all.msg?.content?.replace(all.client?.prefix, "").replace(all.cmd, "");
    arg = arg?.trim();
    all.arg = arg;
    code(all)
  }
  return code
}
