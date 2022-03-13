module.exports = async (d) => {
 const [condition, ms] = d.data.splits
 let cond = eval(condition)
d.msg.error = !cond
   
d.msg.error ? d.msg.channel.send(`${ms}`) : ""
    return ""
}
