const crypto = require("crypto")
module.exports = {
    name: "$encryptData",
    description: "Encrpyt provided data/text with provided key using crypto module",
    usage: "[text;key]",
    code: async (d) => {
        let enc;
        const [text, key] = d.data.splits;
        if (!text || !key) return d.sendError(d, "Please provided the text and key");
        try {
            const keys = crypto.scryptSync(key, 'salt', 24)
            const cipher = new crypto.createCipheriv('aes-192-cbc', keys, Buffer.alloc(16))

            enc = cipher.update(text, 'utf8', 'hex') + cipher.final('hex')

            return enc

        }
        catch (e) {
            return d.sendError(d, "failed to encrpyt with reason: " + e)
        }
    }
}