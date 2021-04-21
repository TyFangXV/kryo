const fx = require('../function/handler');

module.exports = {
 name : "punch",
 descritpion : 'sends a hug gif',
 async execute(message,discord)
 {
      let card = new discord.MessageEmbed();  
       let data = await fx.AnimeGif("punch",card);
       await message.channel.send(data);
 }
};