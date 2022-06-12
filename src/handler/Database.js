const sep = "~|•√π÷×¶∆●∆¶×÷π√•|~";
const sepEach = "●";
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
let shouldWait = false;

let waitedValue;

async function setToFile(pathh, table, all) {
    let keys = Array.from(all.keys());
    let values = Array.from(all.values());
    let object = {};
    keys.forEach((x) => (object[x] = values[keys.indexOf(x)]));
    let value = '';
    Object.keys(object).forEach((key) => {
        value += Array.from(key).join(sepEach) + ":" + Array.from(object[key]).join(sepEach) + sep;
        //console.log(key)
    });
    //console.log(all)
    await fsp.writeFile(path.join(process.cwd(), pathh, table, "meat.db"), value)

}

async function set(pathh, table, value) {
    //console.log(value)

    const timeoutFunc = async () => {
        if (waitedValue == null) {
            shouldWait = false;
        } else {
            // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
            await setToFile(pathh, table, waitedValue)
            waitedValue = null;
            setTimeout(timeoutFunc, 1000)
        }
    };
    if (shouldWait) {
        waitedValue = value;
        return
    }
    shouldWait = true;
    await setToFile(pathh, table, value)
    setTimeout(timeoutFunc, 1000);
}

async function get(pathh, table) {
    const all = await fsp.readFile(path.join(process.cwd(), pathh, table, "meat.db"), "utf8")
    return all;
}

class Db {

    constructor(opt) {
        this.path = opt?.path || "./database"
        this.table = opt?.table || "main"
        this.start()
    }

    async set(namae, valuae) {
        valuae = valuae.toString();
        namae = namae.toString();
        const all = this.text;
        all.set(namae, valuae);

        await set(this.path, this.table, all)

    }

    async get(namae) {
        const val = this.text.get(namae);
        return {
            key: namae,
            value: val
        }
    }

    async all() {
        const all = this.text;

        let array = []
        for (const [key, value] of all) {
            array.push({
              key,
              value    
            })

        }
        return array
    }

    async delete(name) {
        const all = this.text;
        all.delete(name);
        await set(this.path, this.table, all)
    }

    async has(name) {
        const all = this.text;
        return all.has(name);
    }

    async ping() {
        const now = Date.now();
        await this.all()
        return Date.now() - now;
    }

    start() {
        if (fs.existsSync(path.join(process.cwd(), this.path)) == false) {
            fs.mkdirSync(path.join(process.cwd(), this.path));
            fs.mkdirSync(path.join(process.cwd(), this.path, this.table));
            fs.writeFileSync(path.join(process.cwd(), this.path, this.table, "meat.db"), "")


        } else if (fs.existsSync(path.join(process.cwd(), this.path, this.table)) == false) {

            fs.mkdirSync(path.join(process.cwd(), this.path, this.table));
            fs.writeFileSync(path.join(process.cwd(), this.path, this.table, "meat.db"), "")

        } else if (fs.existsSync(path.join(process.cwd(), this.path, this.table, "meat.db")) == false) {
            fs.writeFileSync(path.join(process.cwd(), this.path, this.table, "meat.db"), "")

        };
        this.text = new Map()
        const texts = fs.readFileSync(path.join(process.cwd(), this.path, this.table, "meat.db"), "utf8")

        const s = texts.split(sep).filter(z => {
            return z !== ""
        }).forEach(z => {
            this.text.set(z.split(":")[0].replaceAll(sepEach, ''), z.split(":").slice(1).join(":").replaceAll(sepEach, ''))
        });

        console.log("Database ready!")
    }
}
module.exports = Db;
