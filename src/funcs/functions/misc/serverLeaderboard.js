module.exports = {
name: "$serverLeaderboard",
usage: "[varName;text(optional);list(optional);page(optional)]",
description: "create leaderboard for every servers\nAvailable keyword for text: `{position}` to get server position at the leaderboard\n`{name}` server name\n`{value}` to get the variable value for the server\nExample: \n```\n$serverLeaderBoard[var;{position}. {name} : {value}]\n```",
code: async (d) => {
const [varName, texts = "{position}. {name} : {value}", list = 10, page = 1] = d.data.splits;
if(!d.this.variable.has(varName)) return d.sendError(d, "Invalid variable name provided");
const guild = Array.from(d.client.guilds.cache).map(z => z[0]);
let dbs = await d.db.all()
dbs = dbs.filter(z => z.key.startsWith(varName) && z.key.split("_").length === 2);
dbs = dbs.filter(z => guild.includes(z.key.split("_")[1]));
let i = 1;
let lb = [];
for(const db of dbs.sort((a, b) => {
return Number(b.value) - Number(a.value)
        })) {
const sid = db.key.split("_")[1];
let server = await d.client.guilds.cache.get(sid);
if(!server) server = await d.client.guilds.fetch(sid, {force: true});
if(server) {
let text = texts;
text = text.replace(/\{position\}/g, i);
text = text.replace(/\{name\}/g, server.name);
text = text.replace(/\{id\}/g, server.id);
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
