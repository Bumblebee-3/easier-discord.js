const EmbedParser = async (msg) => {
  msg = mustEscape(msg);

  const embeds = [];

  let msgs = msg.split("{newEmbed:").slice(1);
  for (let rawr of msgs) {
    rawr = rawr.slice(0, rawr.length - 1);

    const embed = {};
    embed.fields = [];
    const Checker = (peko) => rawr.includes(`{${peko}:`);
    if (Checker("author")) {
      const auth = rawr.split("{author:")[1].split("}")[0].split(":");
      embed.author = {
        name: auth.shift().addBrackets()?.trim() || "",
        icon_url: auth.join(":").addBrackets()?.trim() || "",
      };
    }
    if (Checker("authorURL")) {
      if (!embed.author) return console.error("{author:} was not used");
      embed.author.url = rawr
        .split("{authorURL:")[1]
        .split("}")[0]
        .addBrackets()
        .trim();
    }
    if (Checker("title")) {
      embed.title = rawr.split("{title:")[1].split("}")[0].addBrackets().trim();
    }
    if (Checker("url")) {
      if (!embed.title)
        return console.error("Title was not provided while using {url}");
      embed.url = rawr.split("{url:")[1].split("}")[0].addBrackets().trim();
    }
    if (Checker("description")) {
      embed.description = rawr
        .split("{description:")[1]
        .split("}")[0]
        .addBrackets()
        .trim();
    }
    if (Checker("thumbnail")) {
      embed.thumbnail = {
        url: rawr.split("{thumbnail:")[1].split("}")[0].addBrackets().trim(),
      };
    }
    if (Checker("image")) {
      embed.image = {
        url: rawr.split("{image:")[1].split("}")[0].addBrackets().trim(),
      };
    }
    if (Checker("footer")) {
      const f = rawr.split("{footer:")[1].split("}")[0].split(":");
      embed.footer = {
        text: f.shift().addBrackets().trim() || "",
        icon_url: f.join(":").addBrackets().trim() || "",
      };
    }
    if (Checker("color")) {
      embed.color = Discord.Util.resolveColor(
        rawr.split("{color:")[1].split("}")[0].addBrackets().trim(),
      );
    }
    if (rawr.includes("{timestamp")) {
      let t = rawr.split("{timestamp")[1].split("}")[0].replace(":", "").trim();
      if (t === "" || t === "ms") {
        t = Date.now();
      }
      embed.timestamp = new Date(t);
    }
    if (Checker("field")) {
      const fi = rawr.split("{field:").slice(1);
      for (let fo of fi) {
        fo = fo.split("}")[0].split(":");
        const fon = fo.shift().addBrackets().trim();
        const foi = ["yes", "no", "true", "false"].find(
          (x) => x === fo[Number(fo.length - 1)].trim(),
        )
          ? fo.pop().trim() === "yes"
          : false;

        const fov = fo.join(":").addBrackets().trim();
        embed.fields.push({ name: fon, value: fov, inline: foi });
      }
    }
    if (Checker("fields")) {
      const fie = rawr.split("{fields:").slice(1);
      for (let fiel of fie) {
        fiel = fiel.split("}")[0].split(":");
        for (let oof of fiel) {
          oof = oof.split(",");
          const oofn = oof.shift().addBrackets().trim();
          const oofi = ["yes", "no", "true", "false"].find(
            (x) => x === oof[oof.length - 1].trim(),
          )
            ? oof.pop().trim() === "yes"
            : false;
          const oofv = oof.join(",").addBrackets().trim();
          embed.fields.push({ name: oofn, value: oofv, inline: oofi });
        }
      }
    }
    embeds.push(embed);
  }
  return embeds;
};
