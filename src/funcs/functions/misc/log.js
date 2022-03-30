module.exports = {
name: "$log",
usage: "[message]",
description: "return message in console (console.log)",
code: async (d) => {
console.log(d.data.inside.addB());
return "";
}
}
