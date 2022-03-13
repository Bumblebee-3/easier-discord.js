module.exports = async (d) => {
const [id, value] = d.data.splits
d.db.set(id, value)
    return ""
    }
