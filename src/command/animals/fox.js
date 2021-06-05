const fx = require("../../function/handler");
module.exports = {
  name: "fox",
  async execute(message, discord, args) {
    {
      let card = new discord.MessageEmbed();
      let data = await fx.fox(card);
      await message.channel.send(data);
    }
  },
};
