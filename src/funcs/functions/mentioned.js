module.exports = async (d) => {
let [index = 1] = d.data.splits
index = Number (index) - 1
return [...d.mentions?.users.values()][index]?.id || ""
}
