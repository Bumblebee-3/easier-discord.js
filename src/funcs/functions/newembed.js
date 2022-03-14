const { MessageEmbed } = require('discord.js');


module.exports = async (d) => {
   const [id,...opts = "undefined"] = d.data.splits;
   const client = d.client;
   const channel = await client.channels.cache.get(id);
   const embed = {};
   if (opts[0]!="undefined"){
      embed.title = opts[0].addB();
   }
   if (opts[1]!="undefined"){
      embed.color = opts[1].addB()
   }
   const mess = await channel.send({ embeds: [embed] });
   return ""
}
