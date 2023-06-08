module.exports = {
  name: "$month",
  usage: "[]",
  description: "return month",
  code: async(d) => {

  const months = ['january', 'febuary', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
  return months[new Date(new Date().toLocaleString('en-us', {timeZone: d.timezone})).getMonth()];
 }
}
