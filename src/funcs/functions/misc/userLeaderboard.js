module.exports = {
name: "$userLeaderboard",
usage: "[varName;text(optional);list(optional);page(optional);guildId(optional)]",
description: "create leaderboard for users in the provided guild id\nAvailable keyword for text: `{position}` to get user position at the leaderboard\n`{name}` user name\n`{tag}` user tag\n`{value}` to get the variable value for the user\nExample: \n```\n$userLeaderBoard[coin;{position}. {name} : {value}]\n```",
code: async (d) => {
const [varName, texts = "{position}. {name} : {value}", list = 10, page = 1, guildID = d.guild?.id] = d.data.splits;
if(!d.this.variable.has(varName)) return d.sendError(d, "Invalid variable name provided");
let text = texts;
const guild = d.client.guilds.cache.get(guildID);
let dbs = d.db.all().filter(z => z.key.startsWith(varName));
dbs = dbs.filter(z => z.key.split("_")[1] === guildID);
let i = 1;
let lb = [];
for(const db of dbs.sort((a, b) => {
return Number(b.value) - Number(a.value)
        })) {
const uid = db.key.split("_")[2];
let user = await guild.members.cache.get(uid);
if(!user) user = await guild.members.fetch(uid, {force: true});
if(user) {
let result = "";
user = user.user
result = text.replace(/\{position\}/g, i);
result = text.replace(/\{name\}/g, user.username);
result = text.replace(/\{id\}/g, user.id);
result = text.replace(/\{tag\}/g, user.tag);
result = text.replace(/\{value\}/g, db.value);
lb.push(result)
}

i += 1
     }
const x = page * list - list;
const y = page * list;
lb = lb.slice(x, y);
return lb.join("\n")
   }
}
