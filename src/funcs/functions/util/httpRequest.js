const axios = require ("axios");
module.exports = {
name: "$httpRequest",
usage: "[url;property (optional, use this when u want to get json property);method(optional default to get)]",
description: "make request to provided url",
code: async (d) => {
const [url, property = "", method = "get"] = d.data.splits;
if(url === undefined) return d.sendError(d, "link must be provided");
let res = await axios({
   url: url?.addB(),
   method: method?.addB()
  }).catch(e => {
return d.sendError(d, "Failed to interact to provided link with reason: " + e)
})
res = res?.data
let result = property?.trim() != "" ? eval(`res?.${property}`) : JSON.stringify(res).delB();
return typeof result === "object" ? require ("util").inspect(result, {depth:0})?.delB() : result?.delB();
}
}
