const fx = require("../../function/api/genshin/api");
const path = require("path")
module.exports = {
  name: path.basename(__filename).split(".")[0],
  status : "dep",
  async execute(message, discord) {
    const card = new discord.MessageEmbed();
    const legendData = await fx.get_random_character();
    if(legendData == 404) message.channel.send("*😔 Sorry but i couldn't find it in*");
     card
      .setColor("#fa078d")
      .setTitle(legendData.info.name)
      .setThumbnail(legendData.Image[0])
      .setDescription(legendData.info.description)
      .setImage(legendData.Image[1])
      .setFooter("powered by genshin.dev", "https://genshin.dev/favicon.ico")
      .addFields(
        {
          name: "vision",
          value: legendData.info.vision,
          inline: true,
        },
        {
          name: "birthday",
          value: legendData.info.birthday,
          inline: true,
        },
  
      );
    message.channel.send(card)   
  },
};
