function parse (message) {
if(message.includes("{createEmbed:")) {

let raw = message.split("{createEmbed:").slice(1);
for(let sp of raw) {
let inside = sp.slice(0, sp.lastIndexOf("}"));

  }
}
else return message;
}
module.exports = parse
