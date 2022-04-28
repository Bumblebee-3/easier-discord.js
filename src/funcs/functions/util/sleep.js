module.exports = {
name: "$sleep",
usage: "[time in ms]",
description: "await for the given time",
code: async (d) => {
   const time = d.data.inside;
   const sleep = require("timers/promises").setTimeout;
   if(isNaN(Number(time)) return d.sendError(d, "Invalid given time");
   await sleep(Number(time))
   return "";
  }
}
