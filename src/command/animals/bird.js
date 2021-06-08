const fx = require("../../function/handler");


module.exports = {
  name: "bird",
  async execute(message, discord) 
  {
      let card = new discord.MessageEmbed();
      let data = await fx.bird(card);
      await message.channel.send(data);
  },
};
