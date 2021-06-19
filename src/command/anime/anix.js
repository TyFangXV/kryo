const fx = require("../../function/handler");
const path = require("path")
module.exports = {
  name: path.basename(__filename).split(".")[0],
  descritpion: "sends a waifu",
  async execute(message, discord) {
    let card = new discord.MessageEmbed();
    let data = await fx.Waifu(card);
    await message.channel.send(data);
  },
};
