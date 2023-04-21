module.exports = {
  name: "$day",
  usage: "[]",
  description: "return year",
  code: async(d) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date().getDay()];
 }
}
