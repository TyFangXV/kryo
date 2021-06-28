const anix = require("./anix");


const getRandomCharacter = async(discord)=>{
    let card = new discord.MessageEmbed();
    let data = await anix.waifu();
    if(data == null || undefined) return card.setTitle("Error").setColor("#fa078d");

    card
      .setColor("#fa078d")
      .setThumbnail(data.anime_image)
      .setFooter(data.id, data.character_image)
      .setTitle(data.origin)
      .setImage(data.character_image)
      .setDescription(data.desc)
      .addFields(
        {
          name: "name",
          value: data.name,
          inline: true,
        },
        {
          name: "gender",
          value: data.gender,
          inline: true,
        },
  
      );
    return card;
}

const getCharacterBySearch = async(discord, search)=>{
    let data = await anix.animeCharBySearch(search);
    let card = new discord.MessageEmbed();
    if(data == null || undefined) return card.setTitle("Error").setColor("#fa078d");
    data.forEach(l => {
        let subCard = new discord.MessageEmbed();
        subCard
        .setColor("#fa078d")
        .setThumbnail(l.anime_image)
        .setFooter(l.id, l.character_image)
        .setTitle(l.origin)
        .setImage(l.character_image)
        .setDescription(l.desc)
        .addFields(
          {
            name: "name",
            value: l.name,
            inline: true,
          },
          {
            name: "gender",
            value: l.gender,
            inline: true,
          },
    
        );
      return subCard;
    });
}

module.exports = {getCharacterBySearch, getRandomCharacter}