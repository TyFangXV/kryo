const fx = require("../../function/handler");
module.exports = {
  name: "advice",
  async execute(message) {
    let data = await fx.advice();
    await message.channel.send(`*${data}*`);
  },
};
