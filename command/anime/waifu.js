const fx = require('../../function/handler');
module.exports = {
 name : "waifu",
 descritpion : 'sends a waifu',
 async execute(message,discord)
 {
       console.log('skrr');
       let card = new discord.MessageEmbed();  
       let data = await fx.Waifu(card);
       await message.channel.send(data);

 }
};