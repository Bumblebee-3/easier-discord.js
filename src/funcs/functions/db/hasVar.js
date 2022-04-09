module.exports = {
name: "$hasVar",
usage: "[varName]",
description: "check if provided var name exist",
code: async d => {
   const [name] = d.data.splits;
   if(!name) return d.sendError(d, "Provided the variable name");
   return d.this.variable.has(name).toString()
  }
}
