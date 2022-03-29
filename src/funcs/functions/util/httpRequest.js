const axios = require ("axios");
module.exports = async (d) => {
const [url, property = "", method = "get"] = d.data.splits;
if(url === undefined) return d.sendError(d, "link must be provided");
let res = await axios({
   url: url?.addB(),
   method: method?.addB()
  })
res = res?.data
return property?.trim() != "" ? eval(`res?.${property}`) : JSON.stringify(res);
}
