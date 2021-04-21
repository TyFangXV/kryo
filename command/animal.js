const fx = require('../function/handler');

module.exports = {
name: "Animal",
description : "send pic of animal",
  async execute(message,discord,command)
  {
    let card = new discord.MessageEmbed()   
    if(command == "fox")
    {
     let data = await fx.fox(card);
     await message.channel.send(data);
    }

    if(command == "dog")
    {
      let data = await fx.dog(card);
      await message.channel.send(data);  
    }

    if(command == "cat")
    {
      let data = await fx.cat(card);
      await message.channel.send(data);
    }
  }
};