module.exports = {
name: "$get",
usage: "[name]",
description: "return the value from $let",
code: async (d) => {
const [name] = d.data.splits;
return d.data.datas?.vars?.[name?.addB()];
}
}
