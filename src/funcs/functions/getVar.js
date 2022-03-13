module.exports = async (d) => {
const [id] = d.data.splits
return d.db.get(id)
    }
