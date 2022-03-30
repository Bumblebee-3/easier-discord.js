module.exports = {
name: "$authorId",
usage: "[]",
description: "return author id",
code: async (d) => {
    return d.author?.id
    }
}
