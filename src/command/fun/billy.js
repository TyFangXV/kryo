const path = require("path");

module.exports = {
  name: path.basename(__filename).split(".")[0],
  status : "dev",
  async execute(message) 
  {
    await message.channel.send(`https://belikebill.ga/billgen-API.php?default=1&name=${message.author.username}&sex=male`);
  },
};
