const fx = require('../function/handler');

module.exports = {
 name : "pet",
 descritpion : 'sends a pet gif',
 async execute(message,discord)
 {
      let card = new discord.MessageEmbed();  
       let data = await fx.AnimeGif("pet",card);
       await message.channel.send(data);
 }
};