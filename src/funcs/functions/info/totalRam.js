const os = require ('os');

module.exports = {
  name: "$totalRam",
  usage: "None",
  description: "Fetches the total ram on the host",
  code: async (d) => {
    return (os.totalmem() / 1024 / 1024).toFixed(2);
    }
  }
