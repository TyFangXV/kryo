const quotes = require("inspirational-quotes");
const path = require("path");

module.exports = {
  name: path.basename(__filename).split(".")[0],
  status : "dep",
  async execute(message, discord) {
    let card = new discord.MessageEmbed();
    card.setColor("#fa078d").setTitle(quotes.getRandomQuote());

    await message.channel.send(card);
  },
};
