const fx = require("../../function/handler");
module.exports = {
  name: "emote",
  async execute(message, discord, args) {
    let card = new discord.MessageEmbed();
    let data = await fx.AnimeGif(args[0], card);
    await message.channel.send(data);
  },
};
