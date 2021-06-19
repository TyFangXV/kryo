const fx = require("../../function/handler");
const path = require("path");

module.exports = {
  name: path.basename(__filename).split(".")[0],
  status : "dep",
  async execute(message, discord) {
    let card = new discord.MessageEmbed();
    let data = await fx.AnimeGif("confuse", card);
    await message.channel.send(data);
  },
};
