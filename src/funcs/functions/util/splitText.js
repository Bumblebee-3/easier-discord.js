module.exports = {
name: "$splitText",
usage: "[text position]",
description: "return text position from $textSplit",
code: async (d) => {
let pos = d.data.inside;
pos = Number(pos - 1);
if(isNaN(pos) || pos < 0) return d.sendError(d, "Text position must be number and higher than 0");
return d.data.datas.textSplit?.[pos]
   }
}
