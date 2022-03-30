module.exports = {
name: "$jsEval",
usage: "[return result?(yes/no);code]",
description: "eval javascript code",
code: async (d) => {
let __inside__ = d.data.splits;
let __out__ = __inside__.shift();
let __evaled__;
let __index__;
try {
 __evaled__ = await eval(__inside__.join(";").addB())
if(typeof __evaled__ != "string") __evaled__ = require("util").inspect(__evaled__, {depth:0});
}
catch (e) {
return d.sendError(d, e)
}
return __out__ === "yes" ? __evaled__.toString().delB() : ""
}
}
