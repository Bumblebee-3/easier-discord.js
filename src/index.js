const Discord = require("discord.js")
const Db = require("json-db-easier")
const db = new Db.Create("main")
class Bot {
constructor (opt) {
    this.opt = opt
    this.client = {}
    this.db = db
    this.cmd = new Map()
    this.start()
    }
    
  async start() {
   const client = new Discord.Client(
    this.opt
  )
   this.client = client
        }
    
    onMessage() {
    this.client.on("messageCreate", async (msg) => {
        await require("./handler/commands.js")(msg, this.client, this.db, this.cmd)
        })
    }
    
    
    command(...opts) {
    for( const opt of opts) { 
        this.cmd.set(opt.name.toLowerCase(), opt.code)
        }
      }
    
    
  async  login(token) {
       await this.client.login(token)
        console.log("Initialized on "+this.client.user.tag +"\n Simple Discord");
        }
}

module.exports = {
    Bot
    }
