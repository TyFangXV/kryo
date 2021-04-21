const fx = require('../function/handler');

module.exports = {
 name : "joke",
 descritpion : 'sends some joke',
 async execute(message,discord)
 {
      let card = new discord.MessageEmbed();  
       let data = await fx.joke(card);
       await message.channel.send(data);
 }
};