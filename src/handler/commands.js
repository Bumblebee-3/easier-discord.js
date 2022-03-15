module.exports = async (msg, client, db, cmd, real) => {
    let body = msg.content.replace(client.prefix, "").toLowerCase()
  let name = Array.from(cmd).filter(z => body.startsWith(z[0])).map(z=>z[0]).toString()  
    if (msg.content.toLowerCase().startsWith(client.prefix) && cmd.get(name) && !msg.author.bot) {
        require("./function.js")(cmd.get(name), name, db, msg, client, real)
        }
    
    }
