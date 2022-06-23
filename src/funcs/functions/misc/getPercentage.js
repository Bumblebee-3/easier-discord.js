module.exports = {
    name: "$getPercentage",
    description: "get percentage from provided 2 numbers",
    usage: "[number1;number2]",
    code: async (d) => {
        let [number1, number2] = d.data.splits;
        if(!number1 || !number2) return d.sendError(d, "Please provide the number");
        number1 = Number(number1)
        number2 = Number(number2)
        if(isNaN(number1) || isNaN(number2)) return d.sendError(d, "Invalid provided number");
        if(number2 < number1) return d.sendError(d, "Number2 should be bigger than number1")
        return Math.round(number1 / number2 * 100)
    }
}