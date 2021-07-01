const fx = require("../../function/api/genshin/api");
const path = require("path")
module.exports = {
  name: path.basename(__filename).split(".")[0],
  status : "dep",
  async execute(message, discord,args) {
    if(args[0] !== '')
       {
        try {
          const search = args.toString().replace(/,/g, ' ').toLowerCase();
          const card = new discord.MessageEmbed();
          const legendData = await fx.get_charcter(search);
          if(legendData == "404") message.channel.send("*😔 Sorry a error occured while searching*");

             card
             .setColor("#fa078d")
             .setTitle(legendData.info.name)
             .setThumbnail(legendData.Image[0])
             .setDescription(legendData.info.description)
             .setImage(legendData.Image[1])
             .setFooter("powered by genshin.dev", "https://api.genshin.dev/characters/lisa/icon")
             .addFields(
               {
                 name: "Nation",
                 value: legendData.info.nation,
                 inline: true,
               },
               {
                 name: "Birthday",
                 value: legendData.info.birthday,
                 inline: true,
               },
               {
                 name : "Rarity",
                 value : legendData.info.rarity,
                 inline: true
               }
         
             );
           message.channel.send(card)   
          
        } catch (error) {
          return null;
        } 
       }

    if(args[0] == '')
       {
         try {
           const card = new discord.MessageEmbed();
           const legendData = await fx.get_random_character();
            card
             .setColor("#fa078d")
             .setTitle(legendData.info.name)
             .setThumbnail(legendData.Image[0])
             .setDescription(legendData.info.description)
             .setImage(legendData.Image[1])
             .setFooter("powered by genshin.dev", "https://api.genshin.dev/characters/lisa/icon")
             .addFields(
               {
                 name: "Nation",
                 value: legendData.info.nation,
                 inline: true,
               },
               {
                 name: "Rirthday",
                 value: legendData.info.birthday,
                 inline: true,
               },
               {
                 name : "Rarity",
                 value : legendData.info.rarity,
                 inline: true
               }
         
             );
           message.channel.send(card)   
           
         } catch (error) {
             message.channel.send(error.message);
         }
       }   
  },
};
