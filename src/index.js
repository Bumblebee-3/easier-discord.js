const getVersion = require ("./handler/version.js");
const version = require("../package.json").version;
const Discord = require("discord.js")
const newMap = require("./cache/newMap.js")
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
    this.cmd = require("./handler/commandType.js")
    this.functions = new newMap()
    this.variable = new newMap()
    this.start()
if(typeof this.prefix != "string") throw new Error("prefix must be string");
    }
    //start client
  start() {
    debug('Bot#start')
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
    //events
    onMessage() {
      debug('Bot#onMessage')
    this.client.on("messageCreate", async (msg) => {
      debug('Bot#onMessage:func')
        await require("./handler/command/default.js")(msg, this.client, this.db, this.cmd, this)
        })
    }
    
    onMemberJoin() {
this.client.on("guildMemberAdd", async (member) => {
await require("./handler/command/memberJoin.js")(member, this)
})
}
    onMemberLeave() {
this.client.on("guildMemberRemove", async (member) => {
await require("./handler/command/memberLeave.js")(member, this)
})
}

    //commands

    command(...opts) {
      debug('Bot#command', opts)
    for( const opt of opts) { 
        this.cmd.default.set(opt.name.toLowerCase(), opt)
        }
      }

     executableCommand(opt) {
    this.cmd.executable.set(opt.name.toLowerCase(), opt)
     }

    memberJoinCommand(opt) {
this.cmd.memberJoin.set(this.cmd.memberJoin.size, opt)
}
   
   memberLeaveCommand(opt) {
this.cmd.memberLeave.set(this.cmd.memberLeave.size, opt)
}

    ready(opt) {
this.client.on("ready", async () => {
await require ("./handler/function.js")(opt.code, undefined, this.db, {}, this.client, this)
})
}


    variables(opt) {
      debug('Bot#variables', opt)
for(const [name, value] of Object.entries(opt)) {
this.variable.set(name, value)
}
}
    
  async  login(token) {
    debug('Bot#login')
       const current = await getVersion();
       if(current != version && current !== undefined) console.log("your version is probably old\ncurrent version: " + current + "\nyour version: " + version);
       await this.client.login(token)
        this.client.prefix = this.prefix;
        console.log("Initialized on "+this.client.user.tag +"\nMade with : Simple Discord");
        }
}



class CommandHandler {
  constructor(bot) {
this.bot = bot
}
  load(folder) {
  let dirFolder = path.join(process.cwd(), folder);
    
    let files = fs.readdirSync(dirFolder).filter(file => file.endsWith('js'))
    files.forEach( x => {
      const theFile = require(`${dirFolder}/${x}`)
     const theCmd = this.bot.cmd[theFile?.type || "default"]
     if(theCmd !== undefined) theCmd.set(theFile.name, theFile)
     else console.warn("command type is invalid" + dirFolder + "/" + x);
    });
  }
}


module.exports = {
    Bot,
    CommandHandler
}
