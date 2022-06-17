module.exports = {
name: "$pingDb",
usage: "[]",
description: "return database ping",
code: async (d) => {
  return await d.db.ping();
}
}
