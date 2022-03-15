const { MessageEmbed } = require('discord.js');


module.exports = async (d) => {
   const [id,title,color,url,description,thumbnail,author,timestamp,footer,...opts] = d.data.splits;
   const client = d.client;
   const channel = await client.channels.cache.get(id);
   const embed = {};
   embed.author={};
   embed.thumbnail = {};
   embed.footer = {};
   embed.fields = [];
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
      embed.thumbnail.url=thumbnail.addB();
   }
   if (author !== undefined){
      embed.author.name=author.addB().split(":")[0];
      //embed.author.icon_url=author.addB().split(":")[1];
      //embed.author.url=author.addB().split(":")[2];
   }
   if (timestamp !== undefined || timestamp !== false){
      embed.timestamp = new Date();
   }
   if (footer !== undefined){
      embed.footer.text = footer.addB().split(":")[0];
      //embed.footer.icon_url= footer.addB().split(":")[1];
   }
   
   
   if (opts !==undefined){
      for (let i = 0; i < opts.length; i++) {
         let txt = opts[i];
         embed.fields[i]={};
         embed.fields[i].name=txt.addB().split(":")[0];
         embed.fields[i].value=txt.addB().split(":")[1];
         embed.fields[i].inline=txt.addB().split(":")[0];
         
      }
   }
   channel.send({embeds:[embed]})
   return "";
}
