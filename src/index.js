const Discord = require("discord.js")
const Db = require("json-db-easier")
const fs = require("fs")
const path = require("path")
const debug = require("debug")("ez:main")
debug("Loaded")
class Bot {
constructor (opt) {
    this.opt = opt
    this.client = {}
    this.prefix = opt.prefix
    this.db = new Db.Create("main", opt?.database || {})
    this.cmd = new Map()
    this.functions = new Map()
    this.variable = new Map()
    this.start()
if(typeof this.prefix != "string") throw new Error("prefix must be string");
    }
    
   start() {
    debug('Bot#start')
   const client = new Discord.Client(
    this.opt
  )
   this.client = client
   this.client.simpler = this
let dirFolder = path.join(__dirname, "funcs", "functions");
    
    let files = fs.readdirSync(dirFolder).filter(file => file.endsWith('js'))
    files.forEach( x => {
      const file = require(`${dirFolder}/${x}`)
      this.functions.set("$" + x.replace(".js", "").toLowerCase(), file)
    });
        }
    
    onMessage() {
      debug('Bot#onMessage')
    this.client.on("messageCreate", async (msg) => {
      debug('Bot#onMessage:func')
        await require("./handler/commands.js")(msg, this.client, this.db, this.cmd, this)
        })
    }
    
    
    command(...opts) {
      debug('Bot#command', opts)
    for( const opt of opts) { 
        this.cmd.set(opt.name.toLowerCase(), opt)
        }
      }
    
    variables(opt) {
      debug('Bot#variables', opt)
for(const [name, value] of Object.entries(opt)) {
this.variable.set(name, value)
}
}
    
  async  login(token) {
    debug('Bot#login')
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
      this.cmd.set(theFile.name, theFile)
    });
  }
}


module.exports = {
    Bot,
    CommandHandler
}
