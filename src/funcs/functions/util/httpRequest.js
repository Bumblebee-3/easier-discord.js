const axios = require ("axios");
module.exports = async (d) => {
const [url, property = "", method = "get"] = d.data.splits;
let res = await axios({
   url,
   method
  })
res = res?.data
return property?.trim() != "" ? eval(`res?.${property}`) : JSON.stringify(res);
}
