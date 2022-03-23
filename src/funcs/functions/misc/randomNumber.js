module.exports = async (d) => {
const [first, sec] = d.data.splits

if (isNaN(Number(first)) || isNaN(Number(sec)) || Number(first) >= Number(sec)) return d.sendError(d, "invalid number provided, or, first number higher or equal than the second number");

let random = Math.round(Math.random() * (Number(sec) - Number(first))) + Number(first)

return random
}
