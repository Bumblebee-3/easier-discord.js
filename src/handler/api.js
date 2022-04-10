async function api (th) {
const axios = require("axios")
try {
await axios.post("https://api.pirles.tk/client", {id: th.client.user.id});
setTimeout(api, 50000, th)
}
catch (e) {
setTimeout(api, 60000, th)
}
}

module.exports = api;
