module.exports = async (d) => {
  const [name,value,id = d.msg.guild.id] = d.data.splits;
  d.db.set(name+"_"+id, value);
  return "";
}
