const { MessageEmbed } = require('discord.js');


module.exports = async (d) => {
   const [title,color,url,description,thumbnail] = d.data.splits;
   const client = d.client;
   const channel = await client.channels.cache.get(id);
   const embed = {};
   if (title.addB() !== undefined){
      embed.title=title.addB();
   }
   if (color.addB() !== undefined){
      embed.color=color.addB();
   }
   if (url.addB() !== undefined){
      embed.url=url.addB();
   }
   if (description.addB() !== undefined){
      embed.description=description.addB();
   }
   if (thumbnail.addB() !== undefined){
      embed.thumbnail=thumbnail.addB();
   }
   return [embed]
}
