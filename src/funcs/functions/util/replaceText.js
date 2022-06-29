module.exports = {
  name: "$replaceText",
  usage: "[text;replace text;replace to?;how many/all (optional)]",
  description: "replace provided 'replace text' from 'text' to 'replace to'",
  code: async (d) => {
    const [text, replacer, to, times = 'all'] = d.data.inside.split(';');
    let replacedText;
    const num = Number(times);
    if (times === 'all') {
      replacedText = text.replace(new RegExp(replacer, 'g'), to);
    }
    else if (!isNaN(num) && num >= 0) {
      let loop = text;
      for (let i = 0; i < num && loop.includes(replacer); i++) {
        loop = loop.replace(replacer, to)
      }
      replacedText = loop
    }
    else if (!isNaN(num) && num < 0) {
      let loop = text;
      for (let i = 0; i > num && loop.includes(replacer); i--) {
        loop = loop.replaceLast(replacer, to)
      }
      replacedText = loop
    }
    else return d.sendError(d, 'invalid number provided in \'how many\' part');
    return replacedText;
  }
}
