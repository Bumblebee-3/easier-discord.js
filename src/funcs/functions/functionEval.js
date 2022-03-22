module.exports = async (d) => {
return await require("../../handler/function.js")(d.data.inside, d.cmd, d.db, d.client, d.this) 
}
