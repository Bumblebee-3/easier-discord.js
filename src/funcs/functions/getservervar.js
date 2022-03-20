module.exports = async (d) => {
  const [name,id = d.guild?.id] = d.data.splits;
  return d.db.get(name+"_"+id).value.delB();
}
