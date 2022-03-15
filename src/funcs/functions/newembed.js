const { MessageEmbed } = require('discord.js');


module.exports = async (d) => {
   const [id,title,color,url,description,thumbnail] = d.data.splits;
   const client = d.client;
   const channel = await client.channels.cache.get(id);
   const embed = {};
   if (title !== undefined){
      embed.title=title.addB();
   }
   if (color !== undefined){
      embed.color=color.addB();
   }
   if (url !== undefined){
      embed.url=url.addB();
   }
   if (description !== undefined){
      embed.description=description.addB();
   }
   if (thumbnail !== undefined){
      embed.thumbnail={};
      embed.thumbnail.url=thumbnail.addB();
   }
   channel.send({embeds:[embed]})
}
