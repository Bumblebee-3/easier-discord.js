module.exports = {
name: "$textSplit",
usage: "[text;split by?]",
description: "sperate provided text from the given 'split by'",
code: async (d) => {
const [text, separator = " "] = d.data.splits;
d.data.datas.textSplit = text.split(separator);
return ""
  }
}
