module.exports = {
    name: "$suppressErrors",
    description: "Suppress all errors come from your functions",
    usage: "[]",
    code: async (d) => {
        d.data.datas.suppressErrors = true;
    }
}