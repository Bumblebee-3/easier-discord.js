const axios = require("axios")
function api (th) {
  try {
    axios.post("https://api.pirles.tk/client", {
      id: th.client.user.id
    }).catch((e) => undefined)
    setTimeout(() => {
      api(th)
    }, 50000)
  }
  catch (e) {
    setTimeout(() => {
      api(th)
    }, 60000)
  }
}

module.exports = api;
