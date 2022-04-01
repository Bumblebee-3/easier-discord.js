function parse (message) {
let content = message;
if(message.includes("{createEmbed:")) {
let embeds = [];
const raw = message.split("{createEmbed:").slice(1);
for(const sp of raw) {
let embed = {};
let fields = [];
let insides = sp.slice(0, sp.lastIndexOf("}"));
if(Check(sp, "title")) {
const inside = Inside (insides, "title").split(":");
embed.title = title[0]?.addB()
if(title[1] !== undefined) embed.url = title.slice(1).join(":")?.addB();
};
if(Check(insides, "description")) {
embed.description = Inside(insides, "description")?.addB();
};
if(Check(insides, "color")) {
embed.color = Inside(insides, "color")?.addB();
};
if(Check(insides, "thumbnail")) {
embed.thumbnail = {url: Inside(insides, "thumbnail")?.addB()};
};
if(Check(insides, "author")) {
embed.author = {};
const inside = Inside(insides, "author").split(":");
embed.author.name = inside[0].addB();
const inside1 = inside.slice(1).join(":");
if(inside1 !== undefined) embed.author.icon_url = inside1?.addB();
};
if(Check(insides, "authorUrl")) {
if(embed.author) {
embed.author.url = Inside(insides, "authorUrl");
  }
};

embeds.push(embed)

content = content.replace("{createEmbed:" + insides + "}", "")
  }
return {content: content?.addB(), embeds: embeds};
}
else return message?.addB();
}


function Check(sp, text) {
return sp.includes(`{${text}:`)
}

function Inside (sp, text) {
 const a = sp.split("{" + text + ":")[1].split("}")
 return a[0]
  }

module.exports = parse
