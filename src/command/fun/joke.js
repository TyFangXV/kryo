const fx = require("../../function/handler");

module.exports = {
  name: "joke",
  async execute(message) {
    let data = await fx.dad_joke();
    message.channel.send(data);
  },
};
