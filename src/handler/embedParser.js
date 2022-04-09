function parse (message) {
let content = message;
let embeds = [];
if(message?.includes("{createEmbed:")) {
const raw = message.split("{createEmbed:").slice(1);
for(const sp of raw) {
let embed = {};
embed.fields = [];
let insides = sp.slice(0, sp.lastIndexOf("}"));
if(Check(insides, "title")) {
const title = Inside (insides, "title").split(":");
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
embed.author.name = inside[0]?.addB();
const inside1 = inside.slice(1).join(":");
if(inside1 !== undefined) embed.author.icon_url = inside1?.addB();
};
if(Check(insides, "authorUrl")) {
if(embed.author) {
embed.author.url = Inside(insides, "authorUrl")?.addB();
  }
};
if(Check(insides, "field")) {
const ins = insides.split("{field:").slice(1);
for(const uh of ins) {
const insideField = uh.split("}")[0];
const inside = insideField.split(":");
embed.fields.push({name: inside[0]?.addB(), value: inside[1]?.addB(), inline: inside[2] ? inside[2] === "yes" : false})
  }
};
if(Check(insides, "image")) {
embed.image = {url: Inside(insides, "image")?.addB()};
};
if(Check(insides, "footer")) {
const inside = Inside(insides, "footer").split(":");
embed.footer = {};
embed.footer.text = inside[0]?.addB()
if(inside[1] !== undefined) embed.footer.icon_url = inside.slice(1)?.addB();
};

embeds.push(embed)

content = content.replace("{createEmbed:" + insides + "}", "")
  }
return {content: content === "" ? " " : content?.addB(), embeds: embeds};
}
else return {content: message?.addB() || " ", embeds};
}


function Check(sp, text) {
return sp.includes(`{${text}:`)
}

function Inside (sp, text) {
 const a = sp.split("{" + text + ":")[1].split("}")
 return a[0]
  }

module.exports = parse
