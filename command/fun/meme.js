const fx = require('../../function/handler');
module.exports ={
 name : "meme",
 async execute(message,discord)
 {
   let card = new discord.MessageEmbed();
   let data = await fx.meme(card);
   await message.channel.send(data)
 }
}