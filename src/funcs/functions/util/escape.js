module.exports = {
name: "$escape",
usage: "[text]",
description: "return text to escaping characters",
code: async (d) => {
return d.data?.inside?.delB()
}
}
