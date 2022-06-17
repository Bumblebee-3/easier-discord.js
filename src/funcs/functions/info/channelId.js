module.exports = {
name: "$channelId",
usage: "[]",
description: "return current channel id",
code: async (d) => {
    return d.channel?.id
    }
}
