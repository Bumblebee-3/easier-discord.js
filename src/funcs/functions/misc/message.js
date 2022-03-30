module.exports = {
name: "$message",
usage: "[arg(optional)]",
description: "return the text in message sent by author",
code: async (d) => {
 let arg = d.arg?.split(" ")
 arg = d.data.inside == "" ? arg.join(" ") : arg[Number(d.data.inside)]
    
    return arg ? arg.delB() : ""
    }
}
