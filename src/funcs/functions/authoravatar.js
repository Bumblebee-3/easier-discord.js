module.exports = async (d) => {
  let [size = 4096, dynamic = "yes", format = "webp"] = d.data.splits;
  return d.author?.displayAvatarURL({size: Number(size), dynamic: dynamic === 'yes', format})
}
