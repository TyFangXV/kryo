const Canvas = require("canvas")
const path = require("path")


module.exports = {
  name: path.basename(__filename).split(".")[0],
  status : "dep",
  async execute(message, discord) {
    const canvas = Canvas.createCanvas(500, 200);
    const background = Canvas.loadImage("https://www.dropbox.com/s/0vio75a6t5046oa/profile.png?raw=1")
  },
};
