const path = require("path");
const anix = require("acb-api")
let counter = 0;



const getRandomCharacter = async(discord)=>{
  let card = new discord.MessageEmbed();
  let data = await anix.get_random_character();
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
  let data = await anix.get_character_by_search(search);
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


module.exports = {
  name: path.basename(__filename).split(".")[0],
  descritpion: "sends a anime character",
  async execute(message, discord, args) {
    if(args[0] !== "")
    {
      let card = new discord.MessageEmbed();
      //converts the array into a string 
      let search = args.toString().replace(/,/g, ' ');

      //gets the data of the anime character searched up and then gives the first 10 as the result 
      //if the counter reaches to 10 then it wont send any messages
      //if the data is undefined or null it will send an error embed 
      let data = await anix.get_character_by_search(search);
      if(data == null || undefined) return card.setTitle("Error").setColor("#fa078d");
      data.forEach(async(l) => {
        if(counter !== 10)
          {
               let subCard = new discord.MessageEmbed();
               subCard
               .setColor("#fa078d")
               .setThumbnail(l.anime_image)
               .setFooter(l.id, l.character_image)
               .setTitle(l.name)
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
               counter++;
               await message.channel.send(subCard);
              }
           });
         }

         //if no args is detected than it will randomly send a character
         if(args[0] == "")
           {
             const data = await getRandomCharacter(discord) 
             counter++;
             await message.channel.send(data);
           }
     //resets the counter to 0 after       
     counter = 0; 
  },
};
