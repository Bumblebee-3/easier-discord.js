module.exports = {
  name: "$hour",
  usage: "[]",
  description: "return hour",
  code: async(d) => {

  return new Date(new Date().toLocaleString('en-us', {timeZone: d.timezone})).getHours();
 }
}
