module.exports = {
name: "$globalUserLeaderboard",
usage: "[varName;text(optional);list(optional);page(optional)]",
description: "create leaderboard for every users in all guild\nAvailable keyword for text: `{position}` to get user position at the leaderboard\n`{name}` user name\n`{tag}` to get user tag\n`{value}` to get the variable value for the user\nExample: \n```\n$globalUserLeaderBoard[bank;{position}. {name} : {value}]\n```",
code: async (d) => {
const [varName, texts = "{position}. {name} : {value}", list = 10, page = 1] = d.data.splits;
if(!d.this.variable.has(varName)) return d.sendError(d, "Invalid variable name provided");
let dbs = await d.db.all()
dbs = dbs.filter(z => z.key.startsWith(varName) && z.key.split("_").length === 2);
let i = 1;
let lb = [];
for(const db of dbs.sort((a, b) => {
return Number(b.value) - Number(a.value)
        })) {
const uid = db.key.split("_")[1];
let user = await d.client.users.cache.get(uid);
if(!user) user = await d.client.users.fetch(uid, {force: true});
if(user) {
let text = texts;
text = text.replace(/\{position\}/g, i);
text = text.replace(/\{name\}/g, user.name);
text = text.replace(/\{id\}/g, user.id);
text = text.replace(/\{tag\}/g, user.tag);
text = text.replace(/\{value\}/g, db.value);
lb.push(text)
}

i += 1
     }
const x = page * list - list;
const y = page * list;
lb = lb.slice(x, y);
return lb.join("\n")
   }
}
