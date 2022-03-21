module.exports = async (d) => {
let __inside__ = d.data.inside
let __evaled__ = eval(__inside__)
let __index__ = __inside__.split(";").length
return __inside__.split(";")[__index__ - 1] === "yes" ? __evaled__.delB() : ""
}
