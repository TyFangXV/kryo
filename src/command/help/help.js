const fs = require('fs');
const path = require('path');
const discord = require('discord.js')
//let card = new discord.MessageEmbed();
let line = "________";
module.exports = {
  name: "help",
  async execute(message, discord) {
    let folders = fs.readdirSync(path.join(`${__dirname } ../../`));
    let card = new discord.MessageEmbed();
      card
      .setTitle("Kryo help center")
      .setColor("#fa078d")
      .setFooter("@xzle", `https://www.dropbox.com/s/yop4k1op87x9o2d/logo.png?raw=1`)
    folders.forEach(dir => {
     const files = fs.readdirSync(path.join(`${__dirname } ../../${dir}`));
     
     for(file of files)
       {o
          card
           .addField(`ky ${file}`, line)
       }
    })

    message.channel.send(card)
  },
};
