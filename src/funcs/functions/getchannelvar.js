module.exports = async (d) => {
  const [name,id = d.channel?.id] = d.data.splits;
  let value = d.db.get(name+"_"+id).value.delB();
  return value;
}
