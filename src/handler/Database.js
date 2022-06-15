const sep = "~|•√π÷×¶∆●∆¶×÷π√•|~";
const sepEach = "●";
const fs = require("fs");
const fsp = require("fs/promises");
const { toNamespacedPath } = require("path");
const path = require("path");
const Structure = require("./strucuture.js");

class Db extends Structure {

    constructor(opt) {
        super()
        this.path = opt?.path || "./database"
        this.table = opt?.table || "main"
        if (fs.existsSync(path.join(process.cwd(), this.path)) == false) {
            fs.mkdirSync(path.join(process.cwd(), this.path));
            fs.mkdirSync(path.join(process.cwd(), this.path, this.table));
            fs.writeFileSync(path.join(process.cwd(), this.path, this.table, "meat-1.db"), "")


        } else if (fs.existsSync(path.join(process.cwd(), this.path, this.table)) == false) {

            fs.mkdirSync(path.join(process.cwd(), this.path, this.table));
            fs.writeFileSync(path.join(process.cwd(), this.path, this.table, "meat-1.db"), "")

        } else if (fs.readdirSync(path.join(process.cwd(), this.path, this.table)).length == 0) {
            fs.writeFileSync(path.join(process.cwd(), this.path, this.table, "meat-1.db"), "")

        };
        let ondir = fs.readdirSync(path.join(process.cwd(), this.path, this.table));
        ondir = ondir.filter((x) => x.includes("meat-"));
        this.dirLength = ondir.length;
        ondir = ondir.sort((a, b) => {
            let aa = Number(a.split("-")[1].replace('.db', ''));
            let bb = Number(b.split("-")[1].replace('.db', ''));
            return aa - bb;
        })
        ondir.forEach((_x_, index) => {
            this['text' + (index + 1)] = new Map()
            const texts = fs.readFileSync(path.join(process.cwd(), this.path, this.table, "meat-" + (index + 1) + ".db"), "utf8")

            const s = texts.split(sep).filter(z => {
                return z !== ""
            }).forEach(z => {
                this["text" + (index + 1)].set(z.split(":")[0].replaceAll(sepEach, ''), z.split(":").slice(1).join(":").replaceAll(sepEach, ''))
            });
        })
        if(this['text' + (this.dirLength)].size >= 10000) {
            this.dirLength++;
            this['text' + this.dirLength] = new Map()
            fsp.writeFile(path.join(process.cwd(), this.path, this.table, "meat-" + this.dirLength + ".db"), "")
        } 
        console.log("Database ready!")
        
       
        this.start()
    }

    async set(namae, valuae) {
        valuae = valuae.toString();
        namae = namae.toString();
        await this.cache(namae, valuae);

    }

    async get(namae) {
        const val = await this.getCache(namae, this, this.dirLength);
        return {
            key: namae,
            value: val
        }
    }

    async all() {
        let array = []
        const length = this.dirLength;
        for (let i = 1; i <= length; i++) {
            for (const [key, value] of this["text" + i]) {
                array.push({
                    key,
                    value
                })
            }

        }

        return array
    }

    async delete(name) {
        const all = this.text;
        all.delete(name);
        await set(this.path, this.table, all)
    }

    async has(name) {
        let has = false;
        for (let i = 1; i <= this.dirLength; i++) {
            if (this["text" + i].has(name)) {
                has = true;
                break;
            }
        }
        return has;
    }

    async ping() {
        const now = Date.now();
        await this.all()
        return Date.now() - now;
    }

    async start() {
        
    }
}

module.exports = Db;
