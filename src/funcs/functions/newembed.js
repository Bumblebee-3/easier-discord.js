const { MessageEmbed } = require('discord.js');


module.exports = async (d) => {
   const [title,color,url,description,thumbnail] = d.data.splits;
   const client = d.client;
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
      embed.thumbnail=thumbnail.addB();
   }
   return [embed]
}
