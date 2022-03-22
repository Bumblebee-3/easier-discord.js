module.exports = async (d) => {
let up = d.client.uptime;
return Math.floor(up / 86400000) + "d " + Math.floor(up / 3600000 % 24) + "h " + Math.floor(up / 60000 % 60) + "m " + Math.floor(up / 1000 % 60) + "s"
}
