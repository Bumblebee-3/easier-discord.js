const { EmbedParser } = require("../embedparser.js");

module.exports = async (d) => {
   const [id, msg,embed="nothing"] = d.data.splits;
   const client = d.client;
   const channel = await client.channels.cache.get(id);
   let hmmm = {};
   if (embed=="nothing"){ 
       channel.send(`${msg}`.addB());
   }
   else{
       let hmmm.embed = await EmbedParser(embed);
       let hmmm.content = msg;
       channel.send(hmmm.addB());
   }
   return ""
}

/*

module.exports = async (d) => {
   const [id, msg] = d.data.splits;
   const client = d.client;
   const channel = await client.channels.cache.get(id);
   channel.send(`${msg}`.addB());
   return ""
}

*/
