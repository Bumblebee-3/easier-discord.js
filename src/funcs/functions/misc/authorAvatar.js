module.exports = {
name: "$authorAvatar",
usage: "[size(optional);dynamic(optional);format(optional)]",
description: "display author avatar\nreturn link of author avatar",
code: async (d) => {
  let [size = 4096, dynamic = "yes", format = "webp"] = d.data.splits;
  return d.author?.displayAvatarURL({size: Number(size), dynamic: dynamic === 'yes', format})
}
}
