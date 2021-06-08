const fx = require("../../function/handler");
module.exports = {
  name: "cat",
  async execute(message, discord, args) {
      let card = new discord.MessageEmbed();
      let data = await fx.cat(card);
      await message.channel.send(data);
  },
};
