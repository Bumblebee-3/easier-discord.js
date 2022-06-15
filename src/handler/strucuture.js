const sep = "~|•√π÷×¶∆●∆¶×÷π√•|~";
const sepEach = "●";
const fs = require("fs");
const fsp = require("fs/promises");
const { toNamespacedPath } = require("path");
const path = require("path");

let shouldWait = false;

let waitedValue;

class Structure {
    constructor() { }
    async setToFile(indexs) {
        //console.log('hi')
        let index = indexs;
        //if (this['text' + index].size >= 10000) index -= 1;
        console.log(index, indexs);
        if(this['text' + index] === undefined) return;
        let keys = Array.from(this['text' + index].keys());
        let values = Array.from(this['text' + index].values());
        let object = {};
        keys.forEach((x) => (object[x] = values[keys.indexOf(x)]));
        let value = '';
        Object.keys(object).forEach((key) => {
            value += Array.from(key).join(sepEach) + ":" + Array.from(object[key]).join(sepEach) + sep;
            //console.log(key)
        });
        //console.log(this)
        await fsp.writeFile(path.join(process.cwd(), this.path, this.table, "meat-" + index + ".db"), value)
        if(this['text' + (index + 1)] !== undefined) this.setToFile(index + 1)
    }

    async cache(name, value) {
        //console.log(value)
        //console.log(this, length)
        let index;
        if (this['text' + this.dirLength].size <= 10000) {
            for (let i = 1; i <= this.dirLength; i++) {
                //console.log(this['text' + i])
                if (this['text' + i].has(name)) {
                    index = i;
                    break;
                }
            }
        }
        else {
            //console.log(this.dirLength)
            this.setToFile(this.dirLength);
            index = this.dirLength + 1;
            this['text' + (this.dirLength + 1)] = new Map();
            this.dirLength += 1;
            await fsp.writeFile(path.join(process.cwd(), this.path, this.table, "meat-" + this.dirLength + ".db"), "")
           
        }
        if (index === undefined) {
            index = this.dirLength;
        }
        //console.log(this)
        await this['text' + index].set(name, value);
        const timeoutFunc = async () => {
            if (waitedValue == null) {
                shouldWait = false;
            } else {
                //console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
                await this.setToFile(index);
                waitedValue = null;
                setTimeout(timeoutFunc, 1000)
            }
        };
        if (shouldWait) {
            waitedValue = { name, value };
            return
        }
        shouldWait = true;
        await this.setToFile(index)
        setTimeout(timeoutFunc, 1000);
    }

    async getCache(name, all, length) {
        for (let i = 1; i <= length; i++) {
            if (this['text' + i].has(name)) {
                return this['text' + i].get(name);
            }
        }
    }
}
module.exports = Structure;