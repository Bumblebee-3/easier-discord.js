module.exports = async (msg, client, db, cmd, real) => {
    let body = msg.content.toLowerCase()
    let cmds = cmd.get(name)
    body = cmds?.withPrefix == undefined || cmds?.withPrefix == true ? body.replace(client.prefix, "") : body
    let name = Array.from(cmd).filter(z => body.startsWith(z[0])).map(z=>z[0]).toString()  
    
    if (cmds?.withPrefix == undefined || cmds?.withPrefix == true ? msg.content?.toLowerCase().startsWith(client?.prefix) : true && cmds?.code && !msg.author?.bot) {
        require("./function.js")(cmds.code, name, db, msg, client, real)
        }
    
    }
