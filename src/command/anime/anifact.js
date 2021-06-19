const fx = require("../../function/handler");

module.exports = {
  name: "anifact",
  async execute(message, discord) {
    let card = new discord.MessageEmbed();
    let data = await fx.AnimeFact(card);
    await message.channel.send(data);
  },
};
