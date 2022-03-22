module.exports = async (d) => {
return await require("../../../handler/function.js")(d.data.inside.addB(), d.cmd, d.db, d.msg, d.client, d.this) 
}
