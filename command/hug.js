const fx = require('../function/handler');

module.exports = {
 name : "hug",
 descritpion : 'sends a hug gif',
 async execute(message,discord)
 {
      let card = new discord.MessageEmbed();  
       let data = await fx.AnimeGif("hug",card);
       await message.channel.send(data);
 }
};