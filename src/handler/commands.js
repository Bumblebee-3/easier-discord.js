module.exports = async (msg, client, db, cmd, real) => {
    let lower = msg.content.toLowerCase();
    let body = lower.replace(client.prefix, "");
    let name = Array.from(cmd).filter(z => body.startsWith(z[0])).map(z=>z[0]).toString();
    let cmds = cmd.get(name);

    let withPref = cmds?.withPrefix == undefined || cmds?.withPrefix == true ? msg.content?.toLowerCase().startsWith(client?.prefix) : !lower.startsWith(client.prefix) ? true : false

    if (withPref && cmds?.code && !msg.author?.bot) {
        require("./function.js")(cmds.code, name, db, msg, client, real)
        }
    
    }
