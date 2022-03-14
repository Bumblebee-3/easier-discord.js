module.exports = async (d) => {
    const [id, msg] = d.data.splits
    const client = d.client
   const channel = await client.channels.cache.get(id)
   channel.send(`${msg}`.addB())
    return ""
}
