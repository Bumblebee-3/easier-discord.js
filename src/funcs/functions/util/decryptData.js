const crypto = require("crypto")
module.exports = {
    name: "$decryptData",
    description: "Decypt provided data/text with provided key using crypto module",
    usage: "[text;key]",
    code: async (d) => {
        let dnc;
        const [text, key] = d.data.splits;
        if (!text || !key) return d.sendError(d, "Please provided the text and key");
        try {
            const keys = crypto.scryptSync(key, 'salt', 24)
            const decipher = new crypto.createDecipheriv('aes-192-cbc', keys, Buffer.alloc(16))

            dnc = decipher.update(text, 'hex', 'utf8') + decipher.final('utf8')

            return dnc

        }
        catch (e) {
            return d.sendError(d, "failed to decrpyt, probably the key or text is invalid or wrong. Full error: " + e)
        }
    }
}