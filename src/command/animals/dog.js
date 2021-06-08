const fx = require("../../function/handler");
module.exports = {
  name: "dog",
  async execute(message, discord, args) {
      let card = new discord.MessageEmbed();
      let data = await fx.dog(card);
      await message.channel.send(data);
  },
};
