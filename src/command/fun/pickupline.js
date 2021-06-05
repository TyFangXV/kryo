const fx = require("../../function/handler");

module.exports = {
  name: "pickupline",
  async execute(message) {
    let data = await fx.pickup_line();
    await message.channel.send(`*${data}*`);
  },
};
