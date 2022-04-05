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
    const all = await get(this.path, this.table);
    const name = Array.from(namae).join(sepEach);
    const value = Array.from(valuae).join(sepEach);
    const split = all.split(sep);

    let find = split.find(z => z.startsWith(name + ":"))


    set(this.path, this.table, find === undefined ? all + sep + name + ":" + value: text.replace(find, name + ":" + value))

  }

  async get(namae) {
    const all = await get(this.path, this.table);
    const name = Array.from(namae).join(sepEach);
    const split = all.split(sep);

    let find = split.find(z => z.startsWith(name + ":"))
    return {key: name, value: find?.split(":")?.slice(1)?.join(":")?.replace(new RegExp(sepEach, "g"), "")}
  }

  async all() {
    const all = await get(this.path, this.table);
    const s = all.split(sep).filter(z => {
      return z !== ""
    });

    let array = []
    for (let i = 0; i < s.length; i++) {
      array.push({
        key: s[i].replace(new RegExp(sepEach, "g"), "").split(":").slice(0, 1).join(":"), value: get(s[i].replace(new RegExp(sepEach, "g"), "").split(":").slice(0, 1).join(":"))})

    }
    return array
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
      set(this.path, this.table, "")
      return;

    } else if (fs.existsSync(path.join(process.cwd(), this.path, this.table)) == false) {

      fs.mkdirSync(path.join(process.cwd(), this.path, this.table));
      set(this.path, this.table, "")
      return;
    } else if (fs.existsSync(path.join(process.cwd(), this.path, this.table, "db.json")) == false) {
      set(this.path, this.table, "")
      return;

    };
  }
}

module.exports = Db;
