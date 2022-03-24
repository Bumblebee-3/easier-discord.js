module.exports = async (d) => {
 let arg = d.arg?.split(" ")
 arg = d.data.inside == "" ? arg.join(" ") : arg[Number(d.data.inside)]
    
    return arg ? arg.delB() : ""
    }
