module.exports = async (d) => {
  let now = Date.now()
  d.db.all()
  return Date.now() - now
}
