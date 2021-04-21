const fx = require('../function/handler');

module.exports = {
 name : "kiss",
 descritpion : 'sends a kiss gif',
 async execute(message,discord)
 {
      let card = new discord.MessageEmbed();   
       let data = await fx.AnimeGif("kiss",card);
       await message.channel.send(data);
 }
};