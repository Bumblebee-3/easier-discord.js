const { MessageEmbed } = require('discord.js');


module.exports = async (d) => {
   const [id,title,color,url,description,thumbnail] = d.data.splits;
   const client = d.client;
   const channel = await client.channels.cache.get(id);
   const embed = {};
   embed.title=title.addB();
   embed.color=color.addB();
   embed.url=url.addB();
   embed.description=description.addB();
   embed.thumbnail=thumbnail.addB()
   const mess = await channel.send({ embeds: [embed] });
   return ""
}
