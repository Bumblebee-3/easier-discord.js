async function api (th) {
  const axios = require("axios")
  try {
    await axios.post("https://api.pirles.tk/client", {
      id: th.client.user.id
    });
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
