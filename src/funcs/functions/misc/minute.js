module.exports = {
  name: "$minute",
  usage: "[]",
  description: "return year",
  code: async(d) => {

  return new Date(new Date().toLocaleString('en-us', {timeZone: d.timezone})).getMinutes();
 }
}
