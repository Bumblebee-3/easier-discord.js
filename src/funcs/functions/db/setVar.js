module.exports = async (d) => {
const [name, value] = d.data.splits;
if(!d.this.variable.has(name)) return d.sendError(d, `Variable "${name}" not found`);
d.db.set(name, value)
    return ""
    }
