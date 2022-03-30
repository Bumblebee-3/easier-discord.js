module.exports = {
name: "$let",
usage: "[name;value]",
description: "set the provided name to provided value and get it by $get (same as variable but only work for this command and one time use)",
code: async (d) => {
const [name, value] = d.data.splits;
if(!d.data.datas.vars) d.data.datas.vars = {};
d.data.datas.vars[name.addB()] = value.addB();
return ""
}
}
