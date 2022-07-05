module.exports = {
    name: "$suppressErrors",
    description: "Suppress all errors come from your functions",
    usage: "[message(optional)]",
    code: async (d) => {
        d.data.datas.suppressErrors = d.data.splits[0];
    }
}