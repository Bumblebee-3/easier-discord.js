const sep = "~|•√π÷×¶∆●∆¶×÷π√•|~";
const sepEach = "●";
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

async function set(pathh, table, value) {

  await fsp.writeFile(path.join(process.cwd(), pathh, table, "meat.db"), value)

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
    const name = Array.from(namae).join(sepEach);
    const value = Array.from(valuae).join(sepEach);
    const split = all.split(sep);

    let find = split.find(z => z.startsWith(name + ":"))
    const val = find === undefined ? all + sep + name + ":" + value: all.replace(find, name + ":" + value);
    this.text = val

    await set(this.path, this.table, val)

  }

  async get(namae) {
    const all = this.text;
    const name = Array.from(namae).join(sepEach);
    const split = all.split(sep);
    let find = split.find(z => z.startsWith(name + ":"))
    const val = find?.split(":")?.slice(1)?.join(":")?.replace(new RegExp(sepEach, "g"), "");
    return {
      key: namae,
      value: val
    }
  }

  async all() {
    const all = this.text;
    const s = all.split(sep).filter(z => {
      return z !== ""
    });

    let array = []
    for (let i = 0; i < s.length; i++) {
      const db = s[i].replace(new RegExp(sepEach, "g"), "").split(":").slice(1).join(":");
      array.push({
        key: s[i].replace(new RegExp(sepEach, "g"), "").split(":").slice(0, 1).join(":"), value: db
      })

    }
    return array
  }

  async delete (name) {
    const all = this.text;
    name = Array.from(name).join(sepEach);
    const split = all.split(sep);
    this.text = split.filter(z => {
      return z.split(":")[0] !== name
    }).join(sep)
  }

  async has (name) {
    const db = await this.get(name);
    return db?.value;
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
    this.text = fs.readFileSync(path.join(process.cwd(), this.path, this.table, "meat.db"), "utf8")
    console.log("Database ready!")
  }
}

module.exports = Db;
