module.exports = async (d) => {
  const [name,value,id = d.guild?.id] = d.data.splits;
if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
  d.db.set(name+"_"+id, value);
  return "";
}
