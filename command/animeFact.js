const fx = require('../function/handler');

module.exports = {
 name : "animeFact",
 descritpion : 'facts about anime',
 async execute(message,discord)
 {
       
      let card = new discord.MessageEmbed();  
       let data = await fx.AnimeFact(card);
       await message.channel.send(data);
 }
};