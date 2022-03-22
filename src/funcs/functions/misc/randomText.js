module.exports = async (d) => {
const [...text] = d.data.splits
return text[Math.floor(Math.random() * text.length)]
}
