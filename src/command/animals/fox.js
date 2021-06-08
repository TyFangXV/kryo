const fx = require("../../function/handler");
const path =  require("path")
module.exports = {
  name: path.basename(__filename).split(".")[0],
  async execute(message, discord, args) {
      let card = new discord.MessageEmbed();
      let data = await fx.fox(card);
      await message.channel.send(data);
  },
};
