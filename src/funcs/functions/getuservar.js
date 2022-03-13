module.exports = async (d) => {
  const [name,id = d.msg.author.id] = d.data.splits;
  return d.db.get(name+"_"+id).value.delB();
}
