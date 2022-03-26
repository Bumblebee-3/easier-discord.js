module.exports = async (d) => {
let [time, err = ""] = d.data.splits;
err = err.addB();
time = Number(time);
if(isNaN(time)) return d.sendError(d, "Invalid time provided, make sure it's in ms");
let Db = d.db.get(`cooldown_${d.cmd}_${d.author?.id}_${d.guild?.id || 'dm'}`)
Db = Db?.value;
if(!Db) {
  const times = Date.now() + time;
  d.db.set(`cooldown_${d.cmd}_${d.author?.id}_${d.guild?.id || 'dm'}`, times)
  } 
else if (Date.now() < Db) {
  if(err.trim() == "") {
    }
  else {
const diff = Db - Date.now();
const GetTime = Math.floor(diff / 86400000) + "d " + Math.floor(diff / 3600000 % 24) + "h " + Math.floor(diff / 60000 % 60) + "m " + Math.floor(diff / 1000 % 60) + "s";
err = err.replace(/\{getTime\}/g, GetTime)
d.channel.send(err)
d.msg.error = true;
    }
}
  else {
const times = Date.now() + time;
  d.db.set(`cooldown_${d.cmd}_${d.author?.id}_${d.guild?.id || 'dm'}`, times)
    }
  

}
