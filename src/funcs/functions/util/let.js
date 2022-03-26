module.exports = async (d) => {
const [name, value] = d.data.splits;
if(!d.data.datas.vars) d.data.datas.vars = {};
d.data.datas.vars[name.addB()] = value.addB();
return ""
}
