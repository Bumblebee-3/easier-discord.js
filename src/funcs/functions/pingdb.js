module.exports = async (d) => {
  let pong = d.db.ping;
  return pong;
}
