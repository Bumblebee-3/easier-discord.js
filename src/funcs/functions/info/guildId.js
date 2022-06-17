module.exports = {
name: "$guildId",
usage: "[]",
description: "return current guild id",
code: async (d) => {
return d.guild?.id
}
}
