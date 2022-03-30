module.exports = {
name: "$randomText",
usage: "[text;text;text;....]",
description: "random the provided text",
code: async (d) => {
const [...text] = d.data.splits
return text[Math.floor(Math.random() * text.length)]
}
}
