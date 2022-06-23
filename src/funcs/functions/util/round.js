module.exports = {
    name: "$round",
    description: "rounds the specified number to the nearest number",
    usage: "$round[number]",
    code: async (d) => {
        let number = d.data.inside;
        if(number === '' || isNaN(Number(number))) return d.sendError(d, 'Invalid number');
        return Math.round(Number(number))
    }
}