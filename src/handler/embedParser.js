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
const inside = Inside (sp, "title").split(":");
embed.title = title[0]?.addB()
if(title[1] !== undefined) embed.url = title[1]?.addB();
};
if(Check(sp, "description")) {
embed.description = Inside(sp, "description")?.addB();
};
if(Check(sp, "color")) {
embed.color = Inside(sp, "color")?.addB();
};
if(Check(sp, "thumbnail")) {
embed.thumbnail = {url: Inside(sp, "thumbnail")?.addB()};
};
if(Check(sp, "author")) {
embed.author = {};
const inside = Inside(sp, "author").split(":");
embed.author.name = inside[0].addB();
const inside1 = inside.slice(1).join(":");
if(inside1 !== undefined) embed.author.icon_url = inside1?.addB();
};


embeds.push(embed)

content = content.replace("{createEmbed:" + inside + "}", "")
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
