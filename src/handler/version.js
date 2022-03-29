const axios = require("axios")
async function getVersion () {
try {
const result = await axios.get("https://api.pirles.tk/simpler-discord")
return result?.data?.version;
  }
catch (e) {
return undefined
  }
}
module.exports = getVersion
