module.exports = {
  name: "bily",
  async execute(args, message) {
    console.log(args);
    await message.channel.send(
      `https://belikebill.ga/billgen-API.php?default=1&name=${message.author.username}&sex=male`
    );
  },
};
