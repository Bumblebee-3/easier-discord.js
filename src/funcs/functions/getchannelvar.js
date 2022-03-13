module.exports = async (d) => {
  const [name,id = d.msg.channel.id] = d.data.splits;
  return d.db.get(name+"_"+id);
}
