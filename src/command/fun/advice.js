const fx = require("../../function/handler");
const path = require("path");

module.exports = {
  name: path.basename(__filename).split(".")[0],
  status : "dep",
  async execute(message) {
    let data = await fx.advice();
    await message.channel.send(`*${data}*`);
  },
};
