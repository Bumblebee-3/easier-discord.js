module.exports = {
name: "$textSplit",
usage: "[text;split by?]",
description: "sperate provided text from the given 'split by'",
code: async (d) => {
const [text, separator = ""] = d.data.splits;
if(!text) return d.sendError(d, "Text part must be given");
d.data.datas.textSplit = text?.addB().split(separator?.addB());
return ""
  }
}
