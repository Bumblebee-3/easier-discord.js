module.exports = async (d) => {
 let arg = d.msg.content.replace(d.client.prefix, "").replace(d.cmd, "").split(" ")
 arg = d.data.inside == "" ? arg.join(" ") : arg[Number(d.data.inside)]
    
    return arg ? arg.delB() : ""
    }
