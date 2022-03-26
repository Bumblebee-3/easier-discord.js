module.exports = async (d) => {
const [name] = d.data.splits;
return d.data.datas?.vars?.[name?.addB()];
}
