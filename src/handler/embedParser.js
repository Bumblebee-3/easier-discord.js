function parse (message) {
let content = message;
if(message.includes("{createEmbed:")) {
let embeds = [];
const raw = message.split("{createEmbed:").slice(1);
for(const sp of raw) {
let embed = {};
let fields = [];
let inside = sp.slice(0, sp.lastIndexOf("}"));
if(Check(sp, "title")) {
embed.title = Inside (sp, "title");
};
if(Check(sp, "description")) {
embed.description = Inside(sp, "description");
};
if(Check(sp, "color")) {
embed.color = Inside(sp, "color");
};
embeds.push(embed)

content.replace("{createEmbed:" + inside + "}", "")
  }
return {content: content, embeds: embeds};
}
else return message;
}


function Check(sp, text) {
return sp.includes(`{${text}:`)
}

function Inside (sp, text) {
 const a = sp.split("{" + + text + ":")[1].split("}")
 return a[0]
  }

module.exports = parse
