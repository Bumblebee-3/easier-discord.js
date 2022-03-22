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
    this.variable = new Map()
    this.start()
if(typeof this.prefix != "string") throw new Error("prefix must be string");
    }
    
  async start() {
   const client = new Discord.Client(
    this.opt
  )
   this.client = client
   this.client.simpler = this
let dirFolder = path.join(__dirname, "funcs", "functions");
    
    let folders = fs.readdirSync(dirFolder)
    folders.forEach( x => {
    let files = fs.readdirSync(path.join(dirFolder, x)).filter(file => file.endsWith('js'))
     files.forEach( y => {
     const file = require(`${path.join(dirFolder,x,y)}`)
      this.functions.set("$" + y.replace(".js", "").toLowerCase(), file)
   })
 });
        }
    
    onMessage() {
    this.client.on("messageCreate", async (msg) => {
        await require("./handler/commands.js")(msg, this.client, this.db, this.cmd, this)
        })
    }
    
    
    command(...opts) {
    for( const opt of opts) { 
        this.cmd.set(opt.name.toLowerCase(), opt)
        }
      }
    
    variables(opt) {
for(const [name, value] of Object.entries(opt)) {
this.variable.set(name, value)
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
      this.cmd.set(theFile.name, theFile)
    });
  }
}


module.exports = {
    Bot,
    CommandHandler
}
