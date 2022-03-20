module.exports = async (cod, name, db, msg, client, real) => {


    let readFunc = require("../funcs/parser.js")
    
    
let code = cod
let lower = code.toLowerCase()
let split = code.split("$")
let all = []
let Fin = [] 
function search(functions) {
for(const f of functions) {
let func = readFunc.filter((ff) => ff.localeCompare(("$" + f).slice(0, ff.length), undefined, {sensitivity: "accent"}) === 0
       )
if(func.length == 1) {
  Fin.push(func[0])
  }
  else if ( func.length > 1 ) {
      Fin.push(func.sort((a, b) => b.length - a.length)[0])
  }
}
  
return Fin
}
let functions = search(split).reverse()
for (const func of functions) {
    msg.error = false
  const regEscape = v => v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

let params = code.split(new RegExp (regEscape(func), "gi"))
params = params[params.length - 1]
params = params.split("[").slice(1).join("[").split("]")
params = params.join("]").includes("[") ? params.slice(0, params.length <2 ? 1 : params.length - 1).join("]") : params[0]
//params = params.includes("[") ? params.split("]").slice(0, params.length).join("]") : params.replace("]", "")
 all.push({name: func, inside: params, splits: params.split(";"), all: func + "[" + params + "]"})
let splitted = params.split(";")
let replacer = await require("../funcs/replacer.js")({name: func, inside: params, splits: splitted.map(z => z == "" ? undefined : z), all: func + "[" + params + "]"}, name, db, msg, client, msg.error, real)
 code = code.replaceLast(func + "[" + params + "]", replacer)
    if(msg.error) break;
}
return code
}
