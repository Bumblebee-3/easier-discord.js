class Util {
    static checkCondition(condition) {
        let cond = condition.replaceAll('&&', "#__AND__#")
        cond = cond.replaceAll('||', '#__OR__#')
        cond = cond.replaceAll('"', '\\"')

        cond = '"' + cond + '"'
        cond = cond.replaceAll('==', '"=="')
        cond = cond.replaceAll('!=', '"!="')
        cond = cond.replaceAll('>', '">"')
        cond = cond.replaceAll('<', '"<"')
        cond = cond.replaceAll('>=', '">="')
        cond = cond.replaceAll('<=', '"<="')
        cond = cond.replaceAll('#__AND__#', '"&&"')
        cond = cond.replaceAll('#__OR__#', '"||"')
        const condArray = cond.split('"')
        condArray.forEach(z => {
            if (z == '') return z
            if (!isNaN(Number(z))) {
                cond = cond.replace('"' + z + '"', z)
            }
            if (z == 'true' || z == 'false') {
                cond = cond.replace('"' + z + '"', z)
            }
        });
        const result = eval(cond);
        return result == true || result == false ? result : false;
    }
    static embedParser(message) {
        let content = message;
        let embeds = [];
        if (message?.includes("{createEmbed:")) {
            const raw = message.split("{createEmbed:").slice(1);
            for (const sp of raw) {
                let embed = {};
                embed.fields = [];
                let insides = sp.slice(0, sp.lastIndexOf("}"));
                if (Check(insides, "title")) {
                    const title = Inside(insides, "title").split(":");
                    embed.title = title[0]?.unescape()
                    if (title[1] !== undefined) embed.url = title.slice(1).join(":")?.unescape();
                };
                if (Check(insides, "description")) {
                    embed.description = Inside(insides, "description")?.unescape();
                };
                if (Check(insides, "color")) {
                    embed.color = Inside(insides, "color")?.unescape();
                };
                if (Check(insides, "thumbnail")) {
                    embed.thumbnail = {
                        url: Inside(insides, "thumbnail")?.unescape()
                    };
                };
                if (Check(insides, "author")) {
                    embed.author = {};
                    const inside = Inside(insides, "author").split(":");
                    embed.author.name = inside[0]?.unescape();
                    const inside1 = inside.slice(1).join(":");
                    if (inside1 !== undefined) embed.author.icon_url = inside1?.unescape();
                };
                if (Check(insides, "authorUrl")) {
                    if (embed.author) {
                        embed.author.url = Inside(insides, "authorUrl")?.unescape();
                    }
                };
                if (Check(insides, "field")) {
                    const ins = insides.split("{field:").slice(1);
                    for (const uh of ins) {
                        const insideField = uh.split("}")[0];
                        const inside = insideField.split(":");
                        embed.fields.push({
                            name: inside[0]?.unescape(),
                            value: inside[1]?.unescape(),
                            inline: inside[2] ? inside[2] === "yes" : false
                        })
                    }
                };
                if (Check(insides, "image")) {
                    embed.image = {
                        url: Inside(insides, "image")?.unescape()
                    };
                };
                if (Check(insides, "footer")) {
                    const inside = Inside(insides, "footer").split(":");
                    embed.footer = {};
                    embed.footer.text = inside[0]?.unescape()
                    if (inside[1] !== undefined) embed.footer.icon_url = inside.slice(1)?.unescape();
                };
                if (Check(insides, "addTimestamp")) {
                    const ins = Inside(insides, "addTimestamp")
                    embed.timestamp = ins.trim() === "" ? Date.now() : Number(ins);

                };
                embeds.push(embed)
                content = content.replace("{createEmbed:" + insides + "}", "")
            }
            return {
                content: content === "" ? " " : content?.unescape(),
                embeds: embeds
            };
        } else return {
            content: message?.unescape() || " ",
            embeds
        };
        function Check(sp, text) {
            return sp.includes(`{${text}:`)
        }

        function Inside(sp, text) {
            const a = sp.split("{" + text + ":")[1].split("}")
            return a[0]
        }
    }

    static get channelTypes() {
    return {
      Dm: "DM",
      Text: "GUILD_TEXT",
      Voice: "GUILD_VOICE",
      News: "GUILD_NEWS",
      Store: "GUILD_STORE",
      Unknown: "UNKNOWN",
      GroupDm: "GROUP_DM",
      Stage: "GUILD_STAGE_VOICE",
      Category: "GUILD_CATEGORY",
      NewsThread: "GUILD_NEWS_THREAD",
      PublicThread: "GUILD_PUBLIC_THREAD",
      PrivateThread: "GUILD_PRIVATE_THREAD",
    };
  }
    
    static get threadTypes() {
       return {
      public: "GUILD_PUBLIC_THREAD",
      private: "GUILD_PRIVATE_THREAD",
    };
  }
    
    static async fetchMember(guild, id) {
       return guild.members.fetch(id, { force: true }).catch((err) => undefined);
  }
    static async getMember(guild, id) {
        let member = guild.members.cache.get(id);
        if (!member) member = this.fetchMember(guild, id);
        return member;
    }
    
    static async fetchUser(d, userid) {
        const user = await d.client.users.fetch(userid, { force: true }).catch(x => { })
        return user;
    }
    static async getUser(d, userid) {
        let user = d.client.users.cache.get(userid)
        if (!user) user = await this.fetchUser(d, userid)
        return user;
    }
    
    static async fetchMessage(channel, id) {
        return channel.messages.fetch(id, { force: true }).catch(e => { });
  }
    static async getMessage(channel, id) {
        let message = await channel.messages.cache.get(id, { force: true });
        if (!message) message = await this.fetchMessage(channel, id);
        return message;
  }

    static async fetchChannel(d, id) {
        const channel = await d.client.channels.fetch(id, { force: true }).catch(x => { })
        return channel;
    }
    static async getChannel(d, id) {
        let channel = d.client.channels.cache.get(id)
        if (!channel) channel = await this.fetchChannel(d, id)
        return channel;
    }

    static async fetchGuildChannel(guild, channelid) {
        const channel = await guild.channels.fetch(channelid, { force: true }).catch(x => { })
        return channel;
    }
    static async getGuildChannel(guild, channelid) {
        let channel = guild.channels.cache.get(channelid)
        if (!channel) channel = await this.fetchGuildChannel(guild, channelid)
        return channel;
    }

    static async fetchGuild(d, id) {
        const guild = await d.client.guilds.fetch(id, { force: true }).catch(x => { })
        return guild;
    }
    static async getGuild(d, id) {
        let guild = d.client.guilds.cache.get(id)
        if (!guild) guild = await this.fetchGuild(d, id)
        return guild;
    }
}

module.exports = Util;
