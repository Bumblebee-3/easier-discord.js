module.exports = {
    name: "$emojiName",
    description: "Get the name of the reacted emoji",
    usage: "[]",
    code: async (d) => {
        return d.data.datas.emoji.name;
    }
}