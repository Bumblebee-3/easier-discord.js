const crypto = require("crypto")
module.exports = {
    name: "$hashData",
    description: "Hash given text",
    usage: "[Text]",
    code: async (d) => {
        const [text] = d.data.splits;
        if(!text) return d.sendError(d, "Please provide the text")
        try {
            const hash = crypto.createHash('sha256');
            hash.update(text)
            return hash.digest('hex')
        }
        catch (e) {
            return d.sendError(d, 'failed to createHash with reason: ' + e)
        }
    }
}