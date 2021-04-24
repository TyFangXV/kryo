const fx = require('../function/handler');

module.exports = {
name : "anime-fact",
async execute(message,discord){
      let card = new discord.MessageEmbed();  
       let data = await fx.AnimeFact(card);
       await message.channel.send(data);
}
}

