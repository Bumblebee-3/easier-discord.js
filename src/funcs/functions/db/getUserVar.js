module.exports = async (d) => {
  const [name,id = d.author?.id, guildid = d.guild?.id] = d.data.splits;
  if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
  let value = d.db.get(name+"_"+guildid+"_"+id).value.delB();
  value = value === undefined ? d.this.variable.get(name) : value;
  return value;
}
