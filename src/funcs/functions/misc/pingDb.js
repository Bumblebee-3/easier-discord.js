module.exports = {
name: "$pingDb",
usage: "[]",
description: "return database ping",
code: async (d) => {
  return d.db.ping;
}
}
