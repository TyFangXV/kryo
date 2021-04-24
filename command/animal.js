const fx = require('../function/handler');
module.exports = {
 name : "animal",
  async execute(message,discord,args){
    {
      let card = new discord.MessageEmbed()   
      if(args == "fox")
      {
       let data = await fx.fox(card);
       await message.channel.send(data);
      }
  
      if(args == "dog")
      {
        let data = await fx.dog(card);
        await message.channel.send(data);  
      }
  
      if(args == "cat")
      {
        let data = await fx.cat(card);
        await message.channel.send(data);
      }
    }
  }
};

