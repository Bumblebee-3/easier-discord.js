const Discord = require("discord.js")
const Db = require("json-db-easier")
const fs = require("fs")
const path = require("path")

class Bot {
constructor (opt) {
    this.opt = opt
    this.client = {}
    this.prefix = opt.prefix
    this.db = new Db.Create("main", opt?.database || {})
    this.cmd = new Map()
    this.functions = new Map()
    this.start()
if(typeof this.prefix != "string") throw new Error("prefix must be string");
    }
    
  async start() {
   const client = new Discord.Client(
    this.opt
  )
   this.client = client
let dirFolder = path.join(__dirname, "funcs", "functions");
    
    let files = fs.readdirSync(dirFolder).filter(file => file.endsWith('js'))
    files.forEach( x => {
      const file = require(`${dirFolder}/${x}`)
      this.functions.set("$" + x.replace(".js", ""), file)
    });
        }
    
    onMessage() {
    this.client.on("messageCreate", async (msg) => {
        await require("./handler/commands.js")(msg, this.client, this.db, this.cmd, this)
        })
    }
    
    
    command(...opts) {
    for( const opt of opts) { 
        this.cmd.set(opt.name.toLowerCase(), opt.code)
        }
      }
    
    
  async  login(token) {
       await this.client.login(token)
        this.client.prefix = this.prefix
        console.log("Initialized on "+this.client.user.tag +"\nMade with : Simple Discord");
        }
}



class CommandHandler extends Bot{
  constructor(folder) {

    let dirFolder = path.join(process.cwd(), folder);
    
    let files = fs.readdirSync(dirFolder).filter(file => file.endsWith('js'))
    files.forEach( x => {
      const theFile = require(`${dirFolder}/${x}`)
      this.cmd.set(theFile.name, theFile.code)
    });
  }
}


module.exports = {
    Bot,
    CommandHandler
}
