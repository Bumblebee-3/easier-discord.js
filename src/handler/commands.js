module.exports = async (msg, client, db, cmd, real) => {
    let body = msg.content.replace(client.prefix, "").toLowerCase()
    
    let name = Array.from(cmd).filter(z => body.startsWith(z[0])).map(z=>z[0]).toString()  
    let cmds = cmd.get(name)
    if (cmds?.withPrefix == undefined || cmds?.withPrefix == true ? msg.content?.toLowerCase().startsWith(client?.prefix) : true && cmds?.code && !msg.author?.bot) {
        require("./function.js")(cmds.code, name, db, msg, client, real)
        }
    
    }
