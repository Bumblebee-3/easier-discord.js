module.exports = {
name: "$cooldown",
usage: "[time in ms;error message (optional)]",
description: "make cooldown for author id in this guild use {getTime} to get the time\nExample: \n```js\n$send[$channelId[];hi]\n$cooldown[3000;don't spam, wait for {getTime}]\n```",
code: async (d) => {
let [time, err = ""] = d.data.splits;
time = Number(time);
if(isNaN(time)) return d.sendError(d, "Invalid time provided, make sure it's in ms");
let Db = await d.db.get(`cooldown_${d.cmd}_${d.author?.id}_${d.guild?.id || 'dm'}`)
Db = Number(Db?.value);
const diff = Db - Date.now();
const GetTime = Math.floor(diff / 86400000) + "d " + Math.floor(diff / 3600000 % 24) + "h " + Math.floor(diff / 60000 % 60) + "m " + Math.floor(diff / 1000 % 60) + "s";
err = err.replace(/\{getTime\}/g, GetTime)

err = d.util.embedParser(err.trim());
if(!Db) {
  const times = Date.now() + time;
  await d.db.set(`cooldown_${d.cmd}_${d.author?.id}_${d.guild?.id || 'dm'}`, times)
  } 
else if (Date.now() < Db) {
  if(err == "") {
d.data.datas.isError = true;
    }
  else {
d.channel.send(err)
d.data.datas.isError = true;
    }
}
  else {
const times = Date.now() + time;
  await d.db.set(`cooldown_${d.cmd}_${d.author?.id}_${d.guild?.id || 'dm'}`, times)
    }
  return "";
}
}
